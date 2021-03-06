using System.Collections.Generic;
using System;
using System.Linq;
using Domain.models.payslip;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Service.Interface;
using Service.DTOs;
using Service.Utils;
using Domain.models.email;

namespace Service.Implimentation
{
    public class PayslipRepository : IPayslipRepository
    {
        private readonly DataContext _context;
        private readonly IUserRepository _user;
        private readonly SendEmail _sendemail;
        private decimal _totalAmountDeduted;
        private decimal _totalAmountEarned;
        PayLogic pay = new PayLogic(); // shoul;d we call this class here or in constructor
        public PayslipRepository(DataContext context, IUserRepository user, SendEmail sendEmail)
        {
            _user = user;
            _sendemail = sendEmail;
            _context = context;
        }
        public int GenratePayslip(CreatePayslipDTO payVM)
        {
            var emp = _context.Employees.Include(e => e.EmployeeContract).Where(e => e.EmpId == payVM.EmpId).FirstOrDefault();
            if (payVM.payType == "perHour")
            {
                var payslip = new Payslip()
                {
                    EmpId = emp.EmpId,
                    TotalHours = payVM.TotalHours,
                    ContractedHours = emp.EmployeeContract.ContractHours,
                    OvertimeHours = (payVM.TotalHours - emp.EmployeeContract.ContractHours),
                    ContractedEarning = pay.GetContractedEarning(emp.EmployeeContract.ContractHours, emp.EmployeeContract.PerHourPay, payVM.TotalHours),
                    OvertimeEarning = pay.GetOvertimeEarning(payVM.TotalHours, emp.EmployeeContract.ContractHours, emp.EmployeeContract.OvertimeRate, emp.EmployeeContract.PerHourPay),
                    TotalEarning = _totalAmountEarned = pay.GetTotalEarning(),
                    TotalDeduction = _totalAmountDeduted = pay.GetTotalDeduction(emp.EmployeeContract.Union, payVM.TotalHours, _totalAmountEarned, emp.EmployeeContract.ContractHours, emp.EmployeeContract.KiwiSaver),
                    InHandPay = _totalAmountEarned - _totalAmountDeduted,
                    CreatedAtstr = DateTime.Now.ToString("dddd, dd MMMM yyyy")
                };
                _context.Payslips.Add(payslip);
            }
            else
            {
                var payslip = new Payslip()
                {
                    EmpId = emp.EmpId,
                    TotalMonthly = payVM.MonthlyPay,
                    TotalEarning = payVM.MonthlyPay,
                    TotalDeduction = _totalAmountDeduted = pay.GetMonthlyDeduction(emp.EmployeeContract.Union, _totalAmountEarned,
                    emp.EmployeeContract.KiwiSaver),
                    InHandPay = payVM.MonthlyPay - _totalAmountDeduted,
                    CreatedAtstr = DateTime.Now.ToString("dddd, dd MMMM yyyy")
                };
                _context.Payslips.Add(payslip);
            }
            _context.SaveChanges();
            var emailObj = new EmailModel()
            {
                toname = emp.Email,
                toemail = emp.Email,
                subject = $"Payslip Created",
                message = "Your payslip is created.",
                isHtml = false,

            };
            _sendemail.SendEmailHelper(emailObj);
            return 0;
        }
        public List<PayslipDTO> GetAllPayslips(int Id)
        {
            var emp = _context.Employees.Where(e => e.EmpId == Id).FirstOrDefault();
            if (emp == null)
            {
                throw new Exception("User not found");
            }
            var allPs = _context.Payslips.Where(e => e.EmpId == Id).OrderByDescending(e => e.CreatedAt).ToList();
            return allPs.Select(e => new PayslipDTO
            {
                FirstName = emp.FirstName,
                LastName = emp.LastName,
                Username = emp.Username,
                ContractedHours = e.ContractedHours,
                OvertimeHours = e.OvertimeHours,
                TotalHours = e.TotalHours,
                TotalEarning = e.TotalEarning,
                ContractedEarning = e.ContractedEarning,
                OvertimeEarning = e.OvertimeEarning,
                TotalDeduction = e.TotalDeduction,
                InHandPay = e.InHandPay,
                CreatedAtstr = e.CreatedAtstr
            }).ToList();

        }
        public PayslipDTO GetSinglePayslip(int Id)
        {
            var emp = _context.Employees.Where(e => e.EmpId == Id).FirstOrDefault();
            if (emp == null)
            {
                throw new Exception("User not found");
            }
            return _context.Payslips.Where(e => e.EmpId == Id).OrderByDescending(e => e.CreatedAt).Select(e => new PayslipDTO
            {
                FirstName = emp.FirstName,
                LastName = emp.LastName,
                Username = emp.Username,
                ContractedHours = e.ContractedHours,
                OvertimeHours = e.OvertimeHours,
                TotalHours = e.TotalHours,
                TotalEarning = e.TotalEarning,
                ContractedEarning = e.ContractedEarning,
                OvertimeEarning = e.OvertimeEarning,
                TotalDeduction = e.TotalDeduction,
                InHandPay = e.InHandPay,
                CreatedAtstr = e.CreatedAtstr

            }).FirstOrDefault();
        }

        public PayHistoryDTO GetPaySummary(int Id)
        {
            var emp = _context.Employees.Where(e => e.EmpId == Id).FirstOrDefault();
            var allPs = _context.Payslips.Where(e => e.EmpId == Id).ToList();
            decimal sumEarning = 0;
            decimal sumDeduction = 0;
            decimal sumInhand = 0;
            decimal sumHoursWorked = 0;
            decimal sumOTH = 0;
            foreach (var item in allPs)
            {
                sumEarning += item.TotalEarning;
                sumDeduction += item.TotalDeduction;
                sumInhand += item.InHandPay;
                sumHoursWorked += item.TotalHours;
                sumOTH += item.OvertimeHours;
            }
            return allPs.Select(e => new PayHistoryDTO
            {
                FirstName = emp.FirstName,
                TotalEarningSoFar = sumEarning,
                TotalDeductionFar = sumDeduction,
                TotalIHPSoFar = sumInhand,
                TotalHoursSoFar = sumHoursWorked,
                TotalOTHSoFar = sumOTH,
            }).FirstOrDefault();
        }

        public List<PayslipDTO> SearchPayslipByDates(int Id, DateTime from, DateTime to)
        {
            var emp = _context.Employees.Where(e => e.EmpId == Id).FirstOrDefault();

            var allPs = _context.Payslips.Where(e => e.EmpId == Id).Where(e => e.CreatedAt >= from && e.CreatedAt <= to)
            .OrderByDescending(e => e.CreatedAt).ToList();
            return allPs.Select(e => new PayslipDTO
            {
                FirstName = emp.FirstName,
                LastName = emp.LastName,
                Username = emp.Username,
                ContractedHours = e.ContractedHours,
                OvertimeHours = e.OvertimeHours,
                TotalHours = e.TotalHours,
                TotalEarning = e.TotalEarning,
                ContractedEarning = e.ContractedEarning,
                OvertimeEarning = e.OvertimeEarning,
                TotalDeduction = e.TotalDeduction,
                InHandPay = e.InHandPay,
                CreatedAt = e.CreatedAt
            }).ToList();

        }

        public List<PayHistoryDTO> GetPaySummaryForAll()
        {

            var emp = _context.Employees.ToList();
            var dto = (from a in _context.Payslips.ToList()
                       join e in emp on a.EmpId equals e.EmpId
                       group a by new { a.EmpId } into pd
                       select new PayHistoryDTO()
                       {
                           EmpId = pd.FirstOrDefault().EmpId,
                           TotalDeductionFar = pd.Sum(m => m.TotalDeduction),
                           TotalEarningSoFar = pd.Sum(x => x.TotalEarning),
                           TotalIHPSoFar = pd.Sum(x => x.InHandPay),
                           TotalHoursSoFar = pd.Sum(x => x.TotalHours),
                           TotalOTHSoFar = pd.Sum(x => x.OvertimeHours)
                       }
            ).ToList();
            dto.AsParallel().ForAll(q => q.FirstName = emp.Where(x => x.EmpId == q.EmpId).Select(q => q.FirstName).FirstOrDefault());
            return dto;
        }

    }

}