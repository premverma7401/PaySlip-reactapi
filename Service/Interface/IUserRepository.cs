using Domain.models.employee;
using Service.DTOs;
using System.Collections.Generic;

namespace Service.Interface
{
    public interface IUserRepository
    {
        List<EmployeeDTO> GetEmployees();
        Employee GetEmployee(int Id);
        int CreateEmployee(EmployeeCreateDTO employee);
        string UpdateEmployee(Employee employee, int id);
        string DeleteEmployee(int Id);
        List<EmployeeDesignationDTO> GetEmpCountByDesignation();
    }
}