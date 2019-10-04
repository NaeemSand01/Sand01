using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Sabio.Models.Requests.PandappReq
{
    public class ShopProfileReq
    {
        [Required]
        [StringLength(50, MinimumLength = 2, ErrorMessage = "First Name should be a minimum of 2 characters")]
        public string FirstName { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 2, ErrorMessage = "Last Name should be a minimum of 2 characters")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "You must provide a Phone Number")]
        [Display(Name = "Phone Number")]
        public string PhoneNumber { get; set; }

        public int UserId { get; set; }

        public int ShopId { get; set; }
    }
}