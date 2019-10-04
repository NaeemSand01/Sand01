using System.ComponentModel.DataAnnotations;

namespace Sabio.Models.Domain.PandappDomian
{
    public class ShopUserLogAdReq
    {
        [Required]
        [EmailAddress, StringLength(100, MinimumLength = 10, ErrorMessage = "Email should be a minimum of 10 and a maximum of 100 characters")]
        public string Email { get; set; }

        [Required]
        [RegularExpression("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W]).{8,}",
        ErrorMessage = "Password must have at least one lowercase, one uppercase letter and one special character.")]
        public string Password { get; set; }
    }
}