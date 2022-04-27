using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoToGre.Common.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GoToGre.BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalesController : ControllerBase
    {
        // GET: api/<SalesController>
        [HttpGet]
        public IEnumerable<Sale> Get()
        {
            List<Sale> SaleList = new List<Sale>();
            return SaleList;
        }

        // GET api/<SalesController>/5
        [HttpGet("{id}")]
        public Sale Get(int id)
        {
            return new Sale();
        }
        [HttpGet("Member/{id}")]
        public List<Sale> GetMemberSales(int id)
        {
            return new List<Sale>();
        }

        // POST api/<SalesController>
        [HttpPost]
        public void Post([FromBody] Sale value)
        {
        }

        // PUT api/<SalesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Sale value)
        {
        }

        // DELETE api/<SalesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
