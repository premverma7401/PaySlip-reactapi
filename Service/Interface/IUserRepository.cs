using Domain.models.employee;
using Service.VM;
using System.Collections.Generic;

namespace Service.Interface
{
    public interface IUserRepository
    {
        List<EmployeeVM> GetEmployees();
        Employee GetEmployee(int Id);
        int CreateEmployee(EmployeeCreateVm employee);
        string UpdateEmployee(Employee employee, int id);
        string DeleteEmployee(int Id);
        List<EmployeeDesignationVM> GetEmpCountByDesignation();
    }
}