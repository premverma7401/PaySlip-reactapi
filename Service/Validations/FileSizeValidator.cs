using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace Service.Validations
{
    public class FileSizeValidator : ValidationAttribute
    {
        private readonly int _MaxFileSize;
        public FileSizeValidator(int MaxFileSize)
        {
            _MaxFileSize = MaxFileSize;

        }
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (value == null)
            {
                return ValidationResult.Success;
            }
            IFormFile formFile = value as IFormFile;
            if (formFile == null)
            {
                return ValidationResult.Success;
            }
            if (formFile.Length > _MaxFileSize * 1024 * 1024)
            {
                return new ValidationResult($"File size cannot be bigger than {_MaxFileSize } mb");
            }

            return ValidationResult.Success;
        }
    }
}