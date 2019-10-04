using System.Collections.Generic;

namespace Sabio.Models.Domain
{
    public class UserDetails : IUserDetails
    {
        public int Id { get; set; }

        public string Email { get; set; }

        public bool IsConfirmed { get; set; }

        public List<string> Roles { get; set; }

        public object TenantId { get; set; }

        public string Name { get; set; }
    }
}