namespace ProductSinglePage.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using ProductSinglePage.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<ProductSinglePage.Models.ProductDb>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(ProductSinglePage.Models.ProductDb context)
        {

            context.Products.AddOrUpdate(m => m.Name,
                new Product { Name = "kalem", Count = 20, Price = 40 },
                new Product { Name = "silgi", Count = 3, Price = 15 },
                new Product { Name = "defter", Count = 15, Price = 19 },
                new Product { Name = "kýrmýzý kalem", Count = 36, Price = 55 },
                new Product { Name = "mavi kalem", Count = 20, Price = 40 },
                new Product { Name = "kitap", Count = 9, Price = 152 }
                );

            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
        }
    }
}
