using System.Collections.Generic;
using System.Threading.Tasks;
using Domain.models.employee;
using Microsoft.AspNetCore.Mvc;
using Service.Interface;
using Service.VM;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly IUserRepository _user;
        public EmployeeController(IUserRepository user)
        {
            _user = user;

        }
        [HttpGet]
        public async Task<List<EmployeeVM>> GetEmp()
        {
            return await _user.GetEmployees();
        }
        [HttpGet("test")]
        public ActionResult<string> TestFunction()
        {
            return ("test value return");
        }

        [HttpPost]
        public async Task<ActionResult> AddEmployee(EmployeeCreateVm employee)
        {
            await _user.CreateEmployee(employee);
            return Ok("Inserted");
        }
        [HttpPut("{Id}")]
        public async Task<string> UpdateEmployee(Employee employee, int Id)
        {
            return await _user.UpdateEmployee(employee, Id);
        }
        [HttpDelete("{Id}")]
        public async Task<string> DeleteEmployee(int Id)
        {
            return await _user.DeleteEmployee(Id);
        }
        [HttpGet("{Id}")]
        public async Task<Employee> GetEmpById(int Id)
        {
            return await _user.GetEmployee(Id);
        }
        [HttpGet("designationCount")]
        public List<EmployeeDesignationVM> GetEmployeeDesignationCount()
        {
            return _user.GetEmpCountByDesignation();
        }

    }
}




