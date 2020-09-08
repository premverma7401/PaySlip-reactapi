namespace Domain.models.employee
{
    public class EmployeeContract
    {
        public int EmployeeContractId { get; set; }
        public decimal ContractHours { get; set; }
        public decimal PerHourPay { get; set; }
        public decimal OvertimeRate { get; set; }
        public decimal KiwiSaver { get; set; }
        public bool Union { get; set; }
        public ContractType ContractType { get; set; }
    }

    public enum ContractType
    {
        Fulltime,
        Parttime,
        Casual
    }
}