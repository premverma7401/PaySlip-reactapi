using Domain.models;

namespace Service.VM
{
    public class CreatePayslipVM : Entity
    {
        public int EmpId { get; set; }
        public bool isHours { get; set; }
        public decimal TotalHours { get; set; }
        public decimal MonthlyPay { get; set; }

    }
}