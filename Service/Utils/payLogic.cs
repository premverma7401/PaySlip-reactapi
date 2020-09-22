namespace Service.Utils
{
    public class PayLogic
    {
        private decimal _totalContractEarning;
        private decimal _totalOvertimeEarning = 0;
        private decimal _totalEarning;
        private decimal _totalDeduction;
        private decimal taxPaye;

        public decimal GetContractedEarning(decimal contractedHours, decimal payRate, decimal totalHours)
        {
            return _totalContractEarning = (contractedHours > totalHours)
                                            ? (totalHours * payRate)
                                            : (contractedHours * payRate);
        }
        public decimal GetOvertimeEarning(decimal totalHours, decimal contractedHours, decimal overtimeRate, decimal payRate)
        {
            return _totalOvertimeEarning = (totalHours > contractedHours)
                ? ((totalHours - contractedHours) * (overtimeRate * payRate))
                : _totalOvertimeEarning;
        }
        public decimal GetTotalEarning()
        {
            return _totalEarning = (_totalContractEarning + _totalOvertimeEarning);
        }
        public decimal GetTotalDeduction(bool union, decimal totalHours, decimal totalEarning, decimal contractedHours, decimal kiwiSaver)
        {
            taxPaye = (totalHours > contractedHours)
                ? (((30 * totalEarning) / 100) + (kiwiSaver * totalEarning) / 100)
                : (((20 * totalEarning) / 100) + (kiwiSaver * totalEarning) / 100);

            return _totalDeduction = (union == true) ? (100 + taxPaye) : (50 + taxPaye);

        }
        public decimal GetMonthlyDeduction(bool union, decimal totalEarning, decimal kiwiSaver)
        {
            taxPaye = (((20 * totalEarning) / 100) + (kiwiSaver * totalEarning) / 100);

            return _totalDeduction = (union == true) ? (100 + taxPaye) : (50 + taxPaye);

        }
    }
}