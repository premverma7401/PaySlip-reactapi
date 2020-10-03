using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Service.DTOs;

namespace Service.Interface
{
    public interface IPayslipRepository
    {
        int GenratePayslip(CreatePayslipDTO payVM);
        List<PayslipDTO> GetAllPayslips(int Id);
        PayslipDTO GetSinglePayslip(int Id);
        PayHistoryDTO GetPaySummary(int Id);
        List<PayHistoryDTO> GetPaySummaryForAll();
        List<PayslipDTO> SearchPayslipByDates(int Id, DateTime from, DateTime to);
        // Task<int> UpdatePayslip(int Id, decimal th);
        // Task<int> DeletePayslip(int Id);
    }
}