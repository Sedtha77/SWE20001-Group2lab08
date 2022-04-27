using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace GoToGre.Common.Models
{
    public class SaleItem
    {
        public int Id { get; set; }

        public SaleItem()
        {
            Sale = new Sale();
            Product = new Product();
        }
        public SaleItem(double soldprice = 0.0)
        {
            SoldPrice = soldprice;
            Product = new Product();

        }
        public SaleItem(Product product,double soldPrice =0.0)
        {
            SoldPrice = soldPrice;
            Product = product;
        }
        [Key]
        public Sale Sale { get; set; }
        
        public double SoldPrice { get; set; }
        public Product Product { get; set; }
    }
}
