using Domain.models.employee;
using Service.VM;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service.Interface
{
    public interface IUserRepository
    {
        Task<List<EmployeeVM>> GetEmployees();
        Task<Employee> GetEmployee(int Id);
        Task<int> CreateEmployee(Employee employee);
        Task<string> UpdateEmployee(Employee employee, int id);
        Task<string> DeleteEmployee(int Id);
    }
}