using System.ComponentModel.DataAnnotations;

namespace Sabio.Models.Requests.PandappReq
{
    public class ShopProfileUpdateReq : ShopProfileReq
    {
        [Required]
        [Range(1, int.MaxValue)]
        public int Id { get; set; }
    }
}