using Microsoft.AspNetCore.Mvc;
using Service.Interface;

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
        [Route("createPayslip")]
        public IActionResult CreatePS(int id, decimal totalHours)
        {
            return Ok(_payslip.GenratePayslip(id, totalHours));
        }
        [HttpPost]
        [Route("all/{Id}")]

        public IActionResult GetAllPayslips(int Id)
        {
            var payslips = _payslip.GetAllPayslips(Id);
            return Ok(payslips);
        }

        [HttpPost]
        [Route("last/{Id}")]
        public IActionResult GetSinglePayslip(int Id)
        {
            return Ok(_payslip.GetSinglePayslip(Id));
        }
        [HttpPost]
        [Route("summary/{Id}")]
        public IActionResult GetSummaryView(int Id)
        {
            return Ok(_payslip.GetPaySummary(Id));
        }
    }
}