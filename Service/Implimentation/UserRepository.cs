using System;
using System.IO;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Domain.models.employee;
using System.Threading.Tasks;
using Service.Interface;
using System.Linq;
using Service.VM;
using Microsoft.AspNetCore.Hosting;

namespace Service.Implimentation
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;
        private readonly IWebHostEnvironment _hostingenvironment;

        public UserRepository(DataContext context, IWebHostEnvironment hostingEnvironment)
        {
            _context = context;
            _hostingenvironment = hostingEnvironment;

        }

        public async Task<List<EmployeeVM>> GetEmployees()
        {
            return await _context.Employees.Select(e => new EmployeeVM()
            {
                empId = e.employeeId,
                FirstName = e.FirstName,
                LastName = e.LastName,
                ImageUrl = e.ImageUrl,
                Email = e.Email,
                Username = e.Username,
                ContractHours = e.EmployeeContract.ContractHours,
                PerHourPay = e.EmployeeContract.PerHourPay,
                OvertimeRate = e.EmployeeContract.OvertimeRate,
                ContractType = e.EmployeeContract.ContractType,
                KiwiSaver = e.EmployeeContract.KiwiSaver,
                Union = e.EmployeeContract.Union,
                DateOfBirth = e.EmployeePersonal.DateOfBirth,
                Age = e.EmployeePersonal.Age,
                Phone = e.EmployeePersonal.Phone,
                IRD = e.EmployeePersonal.IRD,
                City = e.EmployeePersonal.City

            }).ToListAsync();
        }

        public async Task<int> CreateEmployee(Employee employee)
        {
            var emp = new Employee()
            {
                FirstName = employee.FirstName,
                LastName = employee.LastName,
                ImageUrl = employee.ImageUrl,
                Email = employee.Email,
                Username = employee.Username,
                EmployeePersonal = new EmployeePersonal()
                {
                    DateOfBirth = employee.EmployeePersonal.DateOfBirth,
                    Age = Utils.Helper.GetAge(employee.EmployeePersonal.DateOfBirth),
                    Phone = employee.EmployeePersonal.Phone,
                    IRD = employee.EmployeePersonal.IRD,
                    City = employee.EmployeePersonal.City,
                },
                EmployeeContract = new EmployeeContract()
                {
                    ContractHours = employee.EmployeeContract.ContractHours,
                    PerHourPay = employee.EmployeeContract.PerHourPay,
                    OvertimeRate = employee.EmployeeContract.OvertimeRate,
                    ContractType = employee.EmployeeContract.ContractType,
                    KiwiSaver = employee.EmployeeContract.KiwiSaver,
                    Union = employee.EmployeeContract.Union
                }
            };
            // if (employee.ImageUrl != null && employee.ImageUrl.Length > 0)
            // {
            //     var uploadFol = @"images/employee";
            //     var fileName = Path.GetFileNameWithoutExtension(employee.ImageUrl.FileName);
            //     var extension = Path.GetExtension(employee.ImageUrl.FileName);
            //     var webRootPath = _hostingenvironment.WebRootPath;
            //     fileName = DateTime.UtcNow.ToString("yymmssfff") + fileName + extension;
            //     var path = Path.Combine(webRootPath, uploadFol, fileName);
            //     await employee.ImageUrl.CopyToAsync(new FileStream(path, FileMode.Create));
            //     employee.ImageUrl = "/" + uploadFol + "/" + fileName;

            // }
            await _context.AddAsync(emp);
            await _context.SaveChangesAsync();
            return 0;
        }

        public async Task<string> UpdateEmployee(Employee employee, int Id)
        {
            var emp = await _context.Employees.Where(x => x.employeeId == Id).FirstOrDefaultAsync();
            if (emp == null)
            {
                throw new Exception("Not Found");
            }
            emp.FirstName = employee.FirstName;
            await _context.SaveChangesAsync();
            return ("Updated");

        }

        public async Task<string> DeleteEmployee(int Id)
        {
            var emp = await _context.Employees.Where(x => x.employeeId == Id).FirstOrDefaultAsync();
            if (emp == null)
            {
                throw new Exception("Not Found");
            }
            _context.Remove(emp);
            await _context.SaveChangesAsync();
            return ("Deleted");
        }

        public async Task<Employee> GetEmployee(int Id)
        {
            var emp = await _context.Employees.Include(x => x.EmployeePersonal).Include(x => x.EmployeeContract)
                                              .Where(x => x.employeeId == Id).FirstOrDefaultAsync();
            if (emp == null)
            {
                throw new Exception("No User found");
            }
            return emp;
        }
    }
}