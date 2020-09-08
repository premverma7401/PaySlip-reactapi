namespace Service.Utils
{
    public class PayLogic
    {
        private decimal _totalContractEarning;
        private decimal _totalOvertimeEarning = 0;
        private decimal _totalEarning;
        private decimal _totalDeduction;
        private decimal taxPaye;

        public decimal GetContractedEarning(decimal ch, decimal pr, decimal th)
        {
            if (ch > th)
            {
                return _totalContractEarning = (th * pr);
            }
            return _totalContractEarning = (ch * pr);
        }
        public decimal GetOvertimeEarning(decimal th, decimal ch, decimal or, decimal pr)
        {
            if (th > ch)
            {
                return _totalOvertimeEarning = ((th - ch) * (or * pr));
            }
            return _totalOvertimeEarning;
        }
        public decimal GetTotalEarning()
        {
            return _totalEarning = (_totalContractEarning + _totalOvertimeEarning);
        }
        public decimal GetTotalDeduction(bool union, decimal th, decimal te, decimal ch, decimal ks)
        {
            if (th > ch)
            {
                taxPaye = ((30 * te) / 100) + (ks * te) / 100;
            }
            else
            {
                taxPaye = ((20 * te) / 100) + (ks * te) / 100;
            }

            if (union == true)
            {
                return _totalDeduction = (100 + taxPaye);
            }
            return _totalDeduction = (50 + taxPaye);

        }
    }
}