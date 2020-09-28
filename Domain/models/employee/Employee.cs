using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Domain.models.payslip;
using Microsoft.AspNetCore.Http;

namespace Domain.models.employee
{
    public class Employee : Entity
    {
        [Key]
        public int EmpId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string ImageUrl { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Designation { get; set; }
        
        public List<Payslip> PayRecord { get; set; }

        // Foreign key to define 1 to 1 relation

        public int EmployeeContractId { get; set; }
        public int EmployeePersonalId { get; set; }

        // Navigation properties for EFCore
        public EmployeeContract EmployeeContract { get; set; }
        public EmployeePersonal EmployeePersonal { get; set; }

    }
}