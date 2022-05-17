using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoToGre.Common.Models;
using GoToGre.BackEnd.Repos;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GoToGre.BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalesController : ControllerBase
    {

        private readonly GoToGreRepo _repo;
        public SalesController(GoToGreRepo goToGreRepo)
        {
            _repo = goToGreRepo;
        }
        // GET: api/<SalesController>
        [HttpGet]
        public IEnumerable<Sale> Get()
        {
            List<Sale> SaleList = _repo.getAllSales();
            return SaleList;
        }

        // GET api/<SalesController>/5
        [HttpGet("{id}")]
        public Sale Get(int id)
        {
            return _repo.GetSaleById(id);
        }
        [HttpGet("Member/{id}")]
        public List<Sale> GetMemberSales(int id)
        {
            return _repo.GetSalesByMemberId(id);
        }
        [HttpGet("betweendates")]
        public List<Sale> getSalesBetweenDates([FromBody] DateTimeRequestBody dateTimeRequestBody)
        {
            return _repo.getSalesBetweenDates(dateTimeRequestBody.Start, dateTimeRequestBody.End);
        }

        // POST api/<SalesController>
        [HttpPost]
        public Sale Post([FromBody] CreateSaleRequestBody value)
        {
            Member member = _repo.GetMember(value.MemberID);
            if(member == default){
                return new Sale();
            }
            Sale sale = new Sale();
            sale.Customer = member ;
            return _repo.AddSale(sale);
            
        }

        // PUT api/<SalesController>/5
        [HttpPut("{id}")]
        public void Put([FromBody] Sale value)
        {
  
            _repo.UpdateSale(value);

        }
        [HttpPost("SaleItem")]
        public Sale PostSaleItem([FromBody] AddSaleItemRequest value)
        {
            Product product = _repo.GetProductByID(value.ProductId);
            Sale sale = _repo.GetSaleById(value.SaleItemId);


            if(product == default || sale == default){
                return new Sale();
            }
            SaleItem saleItem = new SaleItem(){
                Sale = sale,
                Product = product,
                SoldPrice = value.SoldPrice
            };
            sale.SaleItems.Add(saleItem);
            sale.TotalPrice = sale.TotalPrice+saleItem.SoldPrice;
            return _repo.UpdateSale(sale);
        }

        // DELETE api/<SalesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _repo.DeleteSale(id);
        }
        [HttpGet("SaleItem/GetSaleItemsBetweenDatesWith")]
        public List<SaleItem> getSaleItemsBetweenDates([FromBody] SaleItemRequestBody saleItemRequestBody) {
            Product product = _repo.GetProductByID(saleItemRequestBody.ProductId);
            if (product == default) return new List<SaleItem>();
            return _repo.getSaleItemsWithProductBetween(product, saleItemRequestBody.Start, saleItemRequestBody.End);
        
        }
        [HttpDelete("SaleItem/{id}")]
        public void DeleteSaleItem(int id) {
           
            _repo.DeleteSaleItem(id);
        
        }


    }
    public class CreateSaleRequestBody {
        public int MemberID {get;set;}
        //public List<AddSaleItemRequest> SaleItemBody {get;set;}

    }
    public class AddSaleItemRequest {

        public int SaleItemId {get;set;}
        public double SoldPrice {get;set;}
        public int ProductId {get;set;}
        public int MemberId {get;set;}
    }
    public class DateTimeRequestBody
    {
        public DateTime Start { get; set; }
        public DateTime End { get; set; }

    }
    public class SaleItemRequestBody
    {
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public int ProductId { get; set; }
    }
}
