using Domain.models;

namespace Service.DTOs
{
    public class PayHistoryDTO
    {
        public string FirstName { get; set; }
        public decimal TotalEarningSoFar { get; set; }
        public decimal TotalDeductionFar { get; set; }
        public decimal TotalIHPSoFar { get; set; }
        public decimal TotalHoursSoFar { get; set; }
        public decimal TotalOTHSoFar { get; set; }
    }
}