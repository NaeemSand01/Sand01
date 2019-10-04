using System.Collections.Generic;

namespace Sabio.Models.Domain
{
    public interface IUserDetails
    {
        int Id { get; set; }
        string Email { get; set; }
        bool IsConfirmed { get; set; }
        string Name { get; set; }
        List<string> Roles { get; set; }
        object TenantId { get; set; }
    }
}