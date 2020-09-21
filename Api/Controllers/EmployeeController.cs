using System.Collections.Generic;
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
        [HttpPost]
        [Route("getListEmp")]
        public IActionResult GetEmp()
        {
            var users = _user.GetEmployees();
            return Ok(users);
        }
        [HttpPost]
        [Route("test")]

        public IActionResult TestFunction()
        {
            return Ok("test value return");
        }

        [HttpPost]
        [Route("createEmp")]

        public IActionResult AddEmployee(EmployeeCreateVm employee)
        {
            return Ok(_user.CreateEmployee(employee));
        }
        [HttpPost]
        [Route("updateEmp/{Id}")]

        public IActionResult UpdateEmployee(Employee employee, int Id)
        {
            _user.UpdateEmployee(employee, Id);
            return Ok("Updated");
        }
        [HttpPost]
        [Route("deleteEmp/{Id}")]
        public string DeleteEmployee(int Id)
        {
            return _user.DeleteEmployee(Id);
        }
        [HttpPost]
        [Route("getEmpId/{Id}")]
        public Employee GetEmpById(int Id)
        {
            return _user.GetEmployee(Id);
        }
        [HttpPost("designationCount")]
        public List<EmployeeDesignationVM> GetEmployeeDesignationCount()
        {
            return _user.GetEmpCountByDesignation();
        }

    }
}




