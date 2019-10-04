namespace Sabio.Models.Domain.PandappDomian
{
    public class ProductView
    {
        public int Id { get; set; }

        public int ShopProductId { get; set; }

        public string ProductImage { get; set; }

        public string ProductName { get; set; }

        public int ProductPrice { get; set; }

        public string ProductSummary { get; set; }

        public string ProductDetails { get; set; }

        public string ProductAbout { get; set; }

        public string ProductSizing { get; set; }

        public string ProductShipping { get; set; }

        public string ProductCategory { get; set; }
    }
}