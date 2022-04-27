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
    public class MemberController : ControllerBase
    {
        private readonly GoToGreRepo _repo;
        public MemberController(GoToGreRepo goToGreRepo)
        {
            _repo = goToGreRepo;
        }
        // GET: api/<MemberController>
        [HttpGet]
        public async Task<IEnumerable<Member>>Get()
        {
            var memberList = _repo.getAllMember();
            return memberList ;
        }

        // GET api/<MemberController>/5
        [HttpGet("{id}")]
        public Member Get(int id)
        {
            return _repo.GetMember(id);
        }

        // POST api/<MemberController>
        [HttpPost]
        public Member Post([FromBody] Member value)
        {
            return _repo.AddMember(value);
        }

        // PUT api/<MemberController>/5
        [HttpPut("{id}")]
        public Member Put(int id, [FromBody] Member member)
        {
            return new Member();
        }

        // DELETE api/<MemberController>/5
        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            Member toDelete = _repo.GetMember(id);
            return _repo.DeleteMember(toDelete);
        }
    }
}
