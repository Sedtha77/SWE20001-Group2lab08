using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoToGre.Common.Models
{
    public class Product
    {
        public Product() { 
        }
        public Product(int id = 0, string name ="", int stockAmmount= 0,double globalPrice= 0.0) {
            Id = id;
            Name = name;
            StockAmmount = stockAmmount;
            GlobalPrice = globalPrice;
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImageURL { get; set; }
        public int StockAmmount { get; set; }
        public double GlobalPrice { get; set; }

        

    }
}
