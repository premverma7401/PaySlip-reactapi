using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Service.Interface;
using Service.VM;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PayslipController : ControllerBase
    {
        private readonly IPayslipRepository _payslip;
        private readonly IUserRepository _user;
        public PayslipController(IPayslipRepository payslip, IUserRepository user)
        {
            _user = user;
            _payslip = payslip;
        }

        [HttpPost]
        public async Task<int> CreatePS(int id, decimal th)
        {
            return await _payslip.GenratePayslip(id, th);
        }
        [HttpGet("all/{Id}")]
        public async Task<List<PayslipVM>> GetAllPayslips(int Id)
        {
            return await _payslip.GetAllPayslips(Id);
        }

        [HttpGet("last/{Id}")]
        public async Task<PayslipVM> GetSinglePayslip(int Id)
        {
            return await _payslip.GetSinglePayslip(Id);
        }
        [HttpGet("summary/{Id}")]
        public async Task<PayHistoryVM> GetSummaryView(int Id)
        {
            return await _payslip.GetPaySummary(Id);
        }
    }
}