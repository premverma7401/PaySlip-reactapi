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
            var emp = _context.Employees.Include(e => e.EmployeeContract).Where(e => e.employeeId == payVM.EmpId).FirstOrDefault();
            if (payVM.isHours == true)
            {
                var payslip = new Payslip()
                {
                    EmpId = emp.employeeId,
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
                    EmpId = emp.employeeId,
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
                toemail = emp.Email,
                subject = $"Payslip for {emp.CreatedAtstr}",
                message = "Your payslip is created.",
                isHtml = false,

            };
            _sendemail.SendEmailHelper(emailObj);
            return 0;
        }
        public List<PayslipDTO> GetAllPayslips(int Id)
        {
            var emp = _context.Employees.Where(e => e.employeeId == Id).FirstOrDefault();
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
                CreatedAtstr = DateTime.Now.ToString("dddd, dd MMMM yyyy")
            }).ToList();

        }
        public PayslipDTO GetSinglePayslip(int Id)
        {
            var emp = _context.Employees.Where(e => e.employeeId == Id).FirstOrDefault();
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
                CreatedAtstr = DateTime.Now.ToString("dddd, dd MMMM yyyy")

            }).FirstOrDefault();
        }

        public PayHistoryDTO GetPaySummary(int Id)
        {
            var emp = _context.Employees.Where(e => e.employeeId == Id).FirstOrDefault();
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
            var emp = _context.Employees.Where(e => e.employeeId == Id).FirstOrDefault();

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

    }

    // public  int> UpdatePayslip(int Id, decimal th)
    // {
    //     return 1;
    // }
    // public  int> DeletePayslip(int Id)
    // {
    //     return 1;

    // }


}