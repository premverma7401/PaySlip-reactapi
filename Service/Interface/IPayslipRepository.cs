using System.Collections.Generic;
using System.Threading.Tasks;
using Service.VM;

namespace Service.Interface
{
    public interface IPayslipRepository
    {
        Task<int> GenratePayslip(int Id, decimal th);
        Task<List<PayslipVM>> GetAllPayslips(int Id);
        Task<PayslipVM> GetSinglePayslip(int Id);
        Task<PayHistoryVM> GetPaySummary(int Id);
        // Task<int> UpdatePayslip(int Id, decimal th);
        // Task<int> DeletePayslip(int Id);
    }
}