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
        public async Task<IActionResult> GetEmp()
        {
            var users = await _user.GetEmployees();
            return Ok(users);
        }
        [HttpGet("test")]
        public IActionResult TestFunction()
        {
            return Ok("test value return");
        }

        [HttpPost]
        public async Task<IActionResult> AddEmployee(EmployeeCreateVm employee)
        {
            await _user.CreateEmployee(employee);
            return Ok("Inserted");
        }
        [HttpPut("{Id}")]
        public async Task<IActionResult> UpdateEmployee(Employee employee, int Id)
        {
            await _user.UpdateEmployee(employee, Id);
            return Ok("Updated");
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




