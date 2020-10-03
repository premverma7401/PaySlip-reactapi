using Domain.models;

namespace Service.DTOs
{
    public class CreatePayslipDTO : Entity
    {
        public int EmpId { get; set; }
        public string payType{ get; set; }
        public decimal TotalHours { get; set; }
        public decimal MonthlyPay { get; set; }

    }
}