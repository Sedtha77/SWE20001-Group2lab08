using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoToGre.Common.Models
{
    public class SaleItem
    {
        
        public SaleItem(int id = 0,double soldprice = 0.0)
        {
            Id = id;
            SoldPrice = soldprice;
            Product = new Product();

        }
        public SaleItem(Product product,int id  = 0 ,double soldPrice =0.0)
        {
            Id = id;
            SoldPrice = soldPrice;
            Product = product;
        }
        public int Id { get; set; }
        public double SoldPrice { get; set; }
        public Product Product { get; set; }
    }
}
