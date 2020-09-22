using System.Collections.Generic;
using System;
using System.Linq;
using Domain.models.payslip;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Service.Interface;
using Service.VM;
using Service.Utils;

namespace Service.Implimentation
{
    public class PayslipRepository : IPayslipRepository
    {
        private readonly DataContext _context;
        private readonly IUserRepository _user;
        private decimal _totalAmountDeduted;
        private decimal _totalAmountEarned;
        PayLogic pay = new PayLogic();

        public PayslipRepository(DataContext context, IUserRepository user)
        {
            _user = user;
            _context = context;
        }
        public int GenratePayslip(CreatePayslipVM payVM)
        {
            var emp = _context.Employees.Include(e => e.EmployeeContract).Where(e => e.employeeId == payVM.EmpId).FirstOrDefault();
            if (emp == null)
            {
                throw new Exception("User Not Found");
            }
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
                    CreatedAt = DateTime.Now
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
                    InHandPay = _totalAmountEarned - _totalAmountDeduted,
                    CreatedAt = DateTime.Now

                };
                _context.Payslips.Add(payslip);

            }
            _context.SaveChanges();
            return 0;
        }


        public List<PayslipVM> GetAllPayslips(int Id)
        {
            var emp = _context.Employees.Where(e => e.employeeId == Id).FirstOrDefault();
            if (emp == null)
            {
                throw new Exception("User not found");
            }
            var allPs = _context.Payslips.Where(e => e.EmpId == Id).OrderByDescending(e => e.CreatedAt).ToList();
            return allPs.Select(e => new PayslipVM
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
                InHandPay = e.InHandPay
            }).ToList();

        }
        public PayslipVM GetSinglePayslip(int Id)
        {
            var emp = _context.Employees.Where(e => e.employeeId == Id).FirstOrDefault();
            if (emp == null)
            {
                throw new Exception("User not found");
            }
            return _context.Payslips.Where(e => e.EmpId == Id).OrderByDescending(e => e.CreatedAt).Select(e => new PayslipVM
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
                InHandPay = e.InHandPay

            }).FirstOrDefault();
        }

        public PayHistoryVM GetPaySummary(int Id)
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
            return allPs.Select(e => new PayHistoryVM
            {
                FirstName = emp.FirstName,
                TotalEarningSoFar = sumEarning,
                TotalDeductionFar = sumDeduction,
                TotalIHPSoFar = sumInhand,
                TotalHoursSoFar = sumHoursWorked,
                TotalOTHSoFar = sumOTH,
            }).FirstOrDefault();
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
}