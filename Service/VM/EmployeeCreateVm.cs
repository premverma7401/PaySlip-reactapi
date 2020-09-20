using System;
using Domain.models.employee;
using Microsoft.AspNetCore.Http;
using Service.Validations;

namespace Service.VM
{
    public class EmployeeCreateVm
    {
        public int employeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [ContextTypeValidator(ContentTypeGroup.Image)]
        [FileSizeValidator(4)]
        public IFormFile ImageUrl { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Designation { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int Age { get; set; }
        public string Phone { get; set; }
        public string IRD { get; set; }
        public string City { get; set; }
        public decimal ContractHours { get; set; }
        public decimal PerHourPay { get; set; }
        public decimal OvertimeRate { get; set; }
        public decimal KiwiSaver { get; set; }
        public bool Union { get; set; }
        public ContractType ContractType { get; set; }
    }
}