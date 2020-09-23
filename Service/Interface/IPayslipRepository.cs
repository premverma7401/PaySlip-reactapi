using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Service.VM;

namespace Service.Interface
{
    public interface IPayslipRepository
    {
        int GenratePayslip(CreatePayslipVM payVM);
        List<PayslipVM> GetAllPayslips(int Id);
        PayslipVM GetSinglePayslip(int Id);
        PayHistoryVM GetPaySummary(int Id);
        List<PayslipVM> SearchPayslipByDates(int Id, DateTime from, DateTime to);
        // Task<int> UpdatePayslip(int Id, decimal th);
        // Task<int> DeletePayslip(int Id);
    }
}