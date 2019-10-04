using System.ComponentModel.DataAnnotations;

namespace Sabio.Models.Domain.PandappDomian
{
    public class ShopUserAddReq
    {
        [Required]
        [EmailAddress, StringLength(50, MinimumLength = 5, ErrorMessage = "Email should be a minimum of 5 and a maximum of 50 characters")]
        public string Email { get; set; }

        [Required]
        [RegularExpression("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W]).{8,}",
         ErrorMessage = "Password must have at least one lowercase, uppercase letter, and one special character.")]
        public string Password { get; set; }

        [Compare(nameof(Password), ErrorMessage = "Passwords do not match")]
        public string PasswordConfirm { get; set; }
    }
}