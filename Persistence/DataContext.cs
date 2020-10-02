

using Domain.models.employee;
using Domain.models.payslip;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<EmployeeContract> EmployeeContract { get; set; }
        public DbSet<EmployeePersonal> EmployeePersonal { get; set; }
        public DbSet<Payslip> Payslips { get; set; }

    }
}