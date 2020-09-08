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

        [HttpPost]
        public async Task<int> AddEmployee(Employee employee)
        {
            return await _user.CreateEmployee(employee);
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

    }
}




