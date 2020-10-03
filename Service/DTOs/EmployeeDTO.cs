using System;
using Domain.models;
using Domain.models.employee;

namespace Service.DTOs
{
    public class EmployeeDTO : Entity
    {
        public int empId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ImageUrl { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public decimal ContractHours { get; set; }
        public decimal PerHourPay { get; set; }
        public decimal OvertimeRate { get; set; }
        public string ContractType { get; set; }
        public decimal KiwiSaver { get; set; }
        public bool Union { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int Age { get; set; }
        public string Phone { get; set; }
        public string IRD { get; set; }
        public string Designation { get; set; }
        public string City { get; set; }
    }
}