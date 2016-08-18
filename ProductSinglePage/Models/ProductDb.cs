using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ProductSinglePage.Models
{
    public class ProductDb:DbContext
    {
        public ProductDb():base("ProductSinglePage")
        {

        }

        public DbSet<Product> Products { get; set; }
    }
}