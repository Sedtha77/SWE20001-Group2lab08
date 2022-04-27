using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
namespace GoToGre.Common.Models
{
    public class Sale
    {
        public int Id { get; set; }

        public Sale( )
        {
            SaleItems = new List<SaleItem>();
            Customer = new Member();
            TimeStamp = DateTime.Now;
        }
  
        public List<SaleItem> SaleItems { get; set; }
        public Member Customer { get; set; }
        public DateTime TimeStamp { get; set; }
        public double TotalPrice { get; set; }
    }
}
