using System;
using System.IO;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Domain.models.employee;
using Service.Interface;
using System.Linq;
using Service.DTOs;
using Microsoft.AspNetCore.Hosting;
using Domain.models.email;
using Service.Utils;

namespace Service.Implimentation
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;
        private readonly IWebHostEnvironment _hostingenvironment;
        private readonly SendEmail _sendemail;


        public UserRepository(DataContext context, IWebHostEnvironment hostingEnvironment, SendEmail sendEmail)
        {
            _context = context;
            _hostingenvironment = hostingEnvironment;
            _sendemail = sendEmail;

        }

        public List<EmployeeDTO> GetEmployees()
        {
            return _context.Employees.Select(e => new EmployeeDTO()
            {
                empId = e.EmpId,
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

        public int CreateEmployee(EmployeeCreateDTO employee)
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

                },
                CreatedAt = DateTime.Now,
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
            //var emailObj = new EmailModel()
            //{
            //    toemail = emp.Email,
            //    subject = $"Your profile has been registered",
            //    message = $"Your profile has been created and your username is {emp.Username}.",
            //    isHtml = false,

            //};
            //_sendemail.SendEmailHelper(emailObj);
            return emp.EmpId;
        }

        public string UpdateEmployee(Employee employee, int Id)
        {
            var emp = _context.Employees.Where(x => x.EmpId == Id).FirstOrDefault();
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
            var emp = _context.Employees.Where(x => x.EmpId == Id).FirstOrDefault();
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
                                              .Where(x => x.EmpId == Id).FirstOrDefault();
            if (emp == null)
            {
                throw new Exception("No User found");
            }
            return emp;
        }

        public List<EmployeeDesignationDTO> GetEmpCountByDesignation()
        {
            //var empDesiCount = (from z in _context.Employees
            //                    group z by z.Designation into x
            //                    select new EmployeeDesignationDTO()
            //                    {
            //                        Designation = x.Key,
            //                        DesignationCount = x.Count()
            //                    }).ToList();
            //return empDesiCount;


            //var empDesiCount = new List<EmployeeDesignationDTO>()
            //{
            //new EmployeeDesignationDTO(){ Designation="SoftwareDeveloper",DesignationCount=1},
            //new EmployeeDesignationDTO(){ Designation="Designer",DesignationCount=1},
            //new EmployeeDesignationDTO(){ Designation="Tester",DesignationCount=1},
            //};
            //return empDesiCount;

            var empDesiCount = _context.Employees.GroupBy(e => e.Designation).Select(e => new { e.Key, Count = e.Count() }).OrderByDescending(e => e.Count);
            //.ToDictionary(e => e.Key, e => e.Count);
            return empDesiCount.Select(e => new EmployeeDesignationDTO
            {
                DesignationCount = e.Count,
                Designation = e.Key
            }).ToList();
        }

    }
}