namespace Service.VM
{
    public class PayslipVM
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public decimal ContractedHours { get; set; }
        public decimal OvertimeHours { get; set; }
        public decimal TotalHours { get; set; }
        public decimal ContractedEarning { get; set; }
        public decimal OvertimeEarning { get; set; }
        public decimal TotalEarning { get; set; }
        public decimal TotalDeduction { get; set; }
        public decimal InHandPay { get; set; }
    }
}