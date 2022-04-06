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
    public class MembersController : ControllerBase
    {
        // GET: api/<MembersController>
        [HttpGet]
        public IEnumerable<Members> Get()
        {
            List<Members> memberList = new List<Members>();
            
            return memberList;
        }

        // GET api/<MembersController>/5
        [HttpGet("{id}")]
        public Members Get(int id)
        {
            Members member = new Members();
            return member;
        }

        // POST api/<MembersController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<MembersController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Members member)
        {
        }

        // DELETE api/<MembersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
