using System;
using Microsoft.AspNetCore.Mvc;
using Service.Interface;
using Service.DTOs;

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
        public IActionResult CreatePS(CreatePayslipDTO payslipVM)
        {
            return Ok(_payslip.GenratePayslip(payslipVM));
        }
        [HttpPost]
        [Route("all/{Id}")]

        public IActionResult GetAllPayslips(int Id)
        {
            var payslips = _payslip.GetAllPayslips(Id);
            return Ok(payslips);
        }
        [HttpPost]
        [Route("search")]

        public IActionResult SearchPayslips(int Id, DateTime from, DateTime to)
        {
            var payslips = _payslip.SearchPayslipByDates(Id, from, to);
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
        [HttpGet]
        [Route("summaryAll")]
        public IActionResult GetSummaryViewForAll()
        {
            return Ok(_payslip.GetPaySummaryForAll());
        }
    }
}