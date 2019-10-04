using System;
using System.Collections.Generic;
using System.Text;

namespace Sabio.Models.Domain.PandappDomian
{
    public class CartItems
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public int CartItemId { get; set; }

        public string CartItemImage { get; set; }

        public string CartItemName { get; set; }

        public string CartItemPrice { get; set; }

        public int CartItemQuantity { get; set; }

        public DateTime DateAdded { get; set; }

        public DateTime DateModified { get; set; }
    }
}