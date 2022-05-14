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
        public void Post([FromBody] Sale value)
        {
            Member member = value.Customer;
            List<SaleItem> sales = value.SaleItems;
            value.Customer = _repo.GetMember(member.Id);
            value.SaleItems = null;
            _repo.AddSale(value);
            value.SaleItems = sales;
            _repo.UpdateSale(value);
            
            
        }

        // PUT api/<SalesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Sale value)
        {
            _repo.UpdateSale(value);
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
