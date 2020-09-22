using System;
using System.IO;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Domain.models.employee;
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

        public List<EmployeeVM> GetEmployees()
        {
            return _context.Employees.Select(e => new EmployeeVM()
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
                City = e.EmployeePersonal.City,
                Designation = e.Designation
            }).ToList();
        }

        public int CreateEmployee(EmployeeCreateVm employee)
        {
            var emp = new Employee()
            {
                FirstName = employee.FirstName,
                LastName = employee.LastName,
                // ImageUrl = employee.ImageUrl,
                Email = employee.Email,
                Username = employee.Username,
                Designation = employee.Designation,

                EmployeePersonal = new EmployeePersonal()
                {
                    DateOfBirth = employee.DateOfBirth,
                    Age = Utils.Helper.CalculateAge(employee.DateOfBirth),
                    Phone = employee.Phone,
                    IRD = employee.IRD,
                    City = employee.City
                },
                EmployeeContract = new EmployeeContract()
                {
                    ContractHours = employee.ContractHours,
                    PerHourPay = employee.PerHourPay,
                    OvertimeRate = employee.OvertimeRate,
                    ContractType = employee.ContractType,
                    KiwiSaver = employee.KiwiSaver,
                    Union = employee.Union,

                }
            };
            if (employee.ImageUrl != null && employee.ImageUrl.Length > 0)
            {
                var uploadFol = @"images/Employee";
                var fileName = Path.GetFileNameWithoutExtension(employee.ImageUrl.FileName);
                var extension = Path.GetExtension(employee.ImageUrl.FileName);
                var webRootPath = _hostingenvironment.WebRootPath;
                fileName = DateTime.UtcNow.ToString("yymmssfff") + fileName + extension;
                var path = Path.Combine(webRootPath, uploadFol, fileName);
                employee.ImageUrl.CopyTo(new FileStream(path, FileMode.Create));
                emp.ImageUrl = "/" + uploadFol + "/" + fileName;

            }
            _context.Add(emp);
            _context.SaveChanges();
            return emp.employeeId;
        }

        public string UpdateEmployee(Employee employee, int Id)
        {
            var emp = _context.Employees.Where(x => x.employeeId == Id).FirstOrDefault();
            if (emp == null)
            {
                throw new Exception("Not Found");
            }
            emp.FirstName = employee.FirstName;
            _context.SaveChanges();
            return ("Updated");

        }

        public string DeleteEmployee(int Id)
        {
            var emp = _context.Employees.Where(x => x.employeeId == Id).FirstOrDefault();
            if (emp == null)
            {
                throw new Exception("Not Found");
            }
            _context.Remove(emp);
            _context.SaveChanges();
            return ("Deleted");
        }

        public Employee GetEmployee(int Id)
        {
            var emp = _context.Employees.Include(x => x.EmployeePersonal).Include(x => x.EmployeeContract)
                                              .Where(x => x.employeeId == Id).FirstOrDefault();
            if (emp == null)
            {
                throw new Exception("No User found");
            }
            return emp;
        }

        public List<EmployeeDesignationVM> GetEmpCountByDesignation()
        {
            var empDesiCount = _context.Employees.GroupBy(e => e.Designation).Select(e => new { e.Key, Count = e.Count() })
            .ToDictionary(e => e.Key, e => e.Count);
            return empDesiCount.Select(e => new EmployeeDesignationVM
            {
                DesignationCount = e.Value,
                Designation = e.Key
            }).ToList();
        }

    }
}