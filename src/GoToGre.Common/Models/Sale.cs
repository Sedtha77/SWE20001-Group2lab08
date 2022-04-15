using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoToGre.Common.Models
{
    public class Sale
    {
        public Sale(int id = 0)
        {
            Id = id;
            SaleItems = new List<SaleItem>();
            Customer = new Member();
            TimeStamp = DateTime.Now;
        }
        public int Id;
        public List<SaleItem> SaleItems { get; set; }
        public Member Customer { get; set; }
        public DateTime TimeStamp { get; set; }
        public double TotalPrice { get; set; }
    }
}
