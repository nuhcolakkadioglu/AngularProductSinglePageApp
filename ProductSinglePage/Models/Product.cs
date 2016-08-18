using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ProductSinglePage.Models
{
    [Table("ProductTB")]
    public class Product
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public  int Price { get; set; }

        public int Count { get; set; }
    }
}