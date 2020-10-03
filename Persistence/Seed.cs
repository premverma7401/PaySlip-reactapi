using System;
using System.Collections.Generic;
using System.Linq;
using Domain.models.employee;
using Domain.models.payslip;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if (!context.Employees.Any())
            {
                var employee = new List<Employee>
                {
                    new Employee
                    {
                      FirstName= "Prem",
                      LastName= "Sager",
                      Designation="Software Developer",
                   //   ImageUrl= "none",
                      Email= "psag@gmail.com",
                      Username= "premv",
                      EmployeePersonal= new EmployeePersonal
                      {
                            DateOfBirth= DateTime.Now.AddYears(-25),
                            Phone= "0275113822",
                            IRD= "456-898-85",
                            City= "Sirsa"
                      },

                      EmployeeContract= new EmployeeContract
                      {
                            ContractHours= 43,
                            PerHourPay= 23,
                            OvertimeRate= 1.5m,
                            ContractType= "Part Time",
                             KiwiSaver=3,
                            Union=true
                      }
                    },


                    new Employee
                    {
                      FirstName= "Aman",
                      LastName= "Verma",
                      Designation="Data Scientist",
                     // ImageUrl= "none",
                      Email= "aman@gmail.com",
                      Username= "amanv",
                      EmployeePersonal= new EmployeePersonal
                      {
                            DateOfBirth= DateTime.Now,
                            Phone= "02743213822",
                            IRD= "456-898-85",
                            City= "Sirsa"
                      },
                      EmployeeContract= new EmployeeContract
                      {
                            ContractHours= 30,
                            PerHourPay= 20,
                            OvertimeRate= 2.5m,
                            ContractType= "Full Time", KiwiSaver=3,
                            Union=true
                      }
                    },
                    new Employee
                    {
                      FirstName= "Rajan",
                      LastName= "Verma",
                       Designation="Web Developer",

                     // ImageUrl= "none",
                      Email= "rjv@gmail.com",
                      Username= "rajv",
                      EmployeePersonal= new EmployeePersonal
                      {
                            DateOfBirth= DateTime.Now,
                            Phone= "3275113822",
                            IRD= "456-898-85",
                            City= "Sirsa"
                      },
                      EmployeeContract= new EmployeeContract
                      {
                            ContractHours= 50,
                            PerHourPay= 40,
                            OvertimeRate= 1.5m,
                            ContractType= "Casual",
                            KiwiSaver=3,
                            Union=true

                      }
                    }

                };
                context.AddRange(employee);
            }
            if (!context.Payslips.Any())
            {
                var payslip = new List<Payslip>{
                    new Payslip
                    {
                        EmpId=1,
                        TotalHours=40
                    },
                      new Payslip
                    {
                        EmpId=1,
                        TotalHours=50
                    },
                      new Payslip
                    {
                        EmpId=2,
                        TotalHours=35
                    },
                      new Payslip
                    {
                        EmpId=2,
                        TotalHours=42
                    },
                      new Payslip
                    {
                        EmpId=2,
                        TotalHours=70
                    }
                };
                context.AddRange(payslip);
            }
            context.SaveChanges();
        }
    }
}