using System;

namespace Service.Utils
{
    public static class Helper
    {
        public static int CalculateAge(DateTime dob)
        {
            var today = DateTime.Today;
            var age = today.Year - dob.Year;
            return age;
        }

    }
}