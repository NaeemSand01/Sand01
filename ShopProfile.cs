using System;
using System.Collections.Generic;
using System.Text;

namespace Sabio.Models.Domain.PandappDomian
{
    public class ShopProfile
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string PhoneNumber { get; set; }

        public int UserId { get; set; }

        public int ShopId { get; set; }

        public DateTime DateAdded { get; set; }

        public DateTime DateModified { get; set; }
    }
}