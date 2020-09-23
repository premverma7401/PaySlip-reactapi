using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;
using System.Linq;

namespace Service.Validations
{
    public class ContextTypeValidator : ValidationAttribute
    {
        private readonly string[] _ValidContentType;
        private readonly string[] _ImageContentType = new string[] { "image/jpeg", "image/png", "image/gif" };
        public ContextTypeValidator(string[] ValidContentType)
        {
            _ValidContentType = ValidContentType;

        }

        public ContextTypeValidator(ContentTypeGroup contentTypeGroup)
        {
            switch (contentTypeGroup)
            {
                case ContentTypeGroup.Image:
                    _ValidContentType = _ImageContentType;
                    break;
            }
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
            if (!_ValidContentType.Contains(formFile.ContentType))
            {
                return new ValidationResult("Content-type must be image");
            }
            return ValidationResult.Success;
        }

    }
    public enum ContentTypeGroup
    {
        Image
    }
}