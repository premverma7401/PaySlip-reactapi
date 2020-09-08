using System.Collections.Generic;
using System;
using System.Linq;
using System.Threading.Tasks;
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
        public async Task<int> GenratePayslip(int Id, decimal th)
        {
            var emp = await _context.Employees.Include(e => e.EmployeeContract).Where(e => e.employeeId == Id).FirstAsync();
            if (emp == null)
            {
                throw new Exception("User Not Found");
            }

            var payslip = new Payslip()
            {
                EmpId = emp.employeeId,
                ContractedHours = emp.EmployeeContract.ContractHours,
                TotalHours = th,
                OvertimeHours = (th - emp.EmployeeContract.ContractHours),
                ContractedEarning = pay.GetContractedEarning(emp.EmployeeContract.ContractHours, emp.EmployeeContract.PerHourPay, th),
                OvertimeEarning = pay.GetOvertimeEarning(th, emp.EmployeeContract.ContractHours, emp.EmployeeContract.OvertimeRate, emp.EmployeeContract.PerHourPay),
                TotalEarning = _totalAmountEarned = pay.GetTotalEarning(),
                TotalDeduction = _totalAmountDeduted = pay.GetTotalDeduction(emp.EmployeeContract.Union, th, _totalAmountEarned, emp.EmployeeContract.ContractHours, emp.EmployeeContract.KiwiSaver),
                InHandPay = _totalAmountEarned - _totalAmountDeduted
            };
            await _context.Payslips.AddAsync(payslip);
            await _context.SaveChangesAsync();
            return 0;
        }


        public async Task<List<PayslipVM>> GetAllPayslips(int Id)
        {
            var emp = await _context.Employees.Where(e => e.employeeId == Id).FirstAsync();
            var allPs = await _context.Payslips.Where(e => e.EmpId == Id).OrderByDescending(e => e.CreatedAt).ToListAsync();
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
        public async Task<PayslipVM> GetSinglePayslip(int Id)
        {
            var emp = await _context.Employees.Where(e => e.employeeId == Id).FirstAsync();

            return await _context.Payslips.Where(e => e.EmpId == Id).OrderByDescending(e => e.CreatedAt).Select(e => new PayslipVM
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

            }).FirstAsync();
        }

        public async Task<PayHistoryVM> GetPaySummary(int Id)
        {
            var emp = await _context.Employees.Where(e => e.employeeId == Id).FirstAsync();
            var allPs = await _context.Payslips.Where(e => e.EmpId == Id).ToListAsync();
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
            }).First();
        }

        // public async Task<int> UpdatePayslip(int Id, decimal th)
        // {
        //     return 1;
        // }
        // public async Task<int> DeletePayslip(int Id)
        // {
        //     return 1;

        // }

    }
}