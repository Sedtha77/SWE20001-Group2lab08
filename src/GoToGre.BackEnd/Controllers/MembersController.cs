﻿using Microsoft.AspNetCore.Mvc;
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
    public class MemberController : ControllerBase
    {
        // GET: api/<MemberController>
        [HttpGet]
        public async Task<IEnumerable<Member>>Get()
        {
            List<Member> memberList = new List<Member>();
            return memberList;
        }

        // GET api/<MemberController>/5
        [HttpGet("{id}")]
        public Member Get(int id)
        {
            Member member = new Member();
            return member;
        }

        // POST api/<MemberController>
        [HttpPost]
        public Member Post([FromBody] Member value)
        {
            Member member = new Member();
            return member;

        }

        // PUT api/<MemberController>/5
        [HttpPut("{id}")]
        public Member Put(int id, [FromBody] Member member)
        {
            return new Member();
        }

        // DELETE api/<MemberController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
