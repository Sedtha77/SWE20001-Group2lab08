using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoToGre.Common
{
    class Sale
    {
        public int id;
        public List<Product> SaleItems { get; set; }
        public Members Customer { get; set; }
        public DateTime TimeStamp { get; set; }
        
    }
}
