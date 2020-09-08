using Domain.models.employee;

namespace Domain.models.payslip
{
    public class Payslip : Entity
    {
        public int PayslipId { get; set; }
        public decimal ContractedHours { get; set; }
        public decimal OvertimeHours { get; set; }
        public decimal TotalHours { get; set; }
        public decimal ContractedEarning { get; set; }
        public decimal OvertimeEarning { get; set; }
        public decimal TotalEarning { get; set; }
        public decimal KiwiSaver { get; set; }
        public int UnionFee { get; set; } = 100;
        public decimal OtherCharges { get; set; }
        public decimal InHandPay { get; set; }
        public decimal PAYE { get; set; }
        public decimal TotalDeduction { get; set; }
        public int EmpId { get; set; }
        public Employee Employee { get; set; }
    }
}