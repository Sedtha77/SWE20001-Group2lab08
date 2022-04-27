using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoToGre.BackEnd.Context;
using GoToGre.Common.Models;
namespace GoToGre.BackEnd.Repos
{
    public class GoToGreRepo
    {
        private readonly GoToGreContext _goToGreContext;
        public GoToGreRepo(GoToGreContext goToGreContext)
        {
            _goToGreContext = goToGreContext;
        }
        public List<Member> getAllMember()
        {
            return _goToGreContext.Member.AsEnumerable().ToList();
        }
        public Member GetMember(int id)
        {
            return _goToGreContext.Member.Where(m => m.Id == id).FirstOrDefault();
        }
        public Member AddMember(Member member)
        {
            Microsoft.EntityFrameworkCore.ChangeTracking.EntityEntry<Member> test =  _goToGreContext.Member.Add(member);
            _goToGreContext.SaveChanges();
            return member;
        }
        public bool DeleteMember(Member member)
        {
            _goToGreContext.Remove(member);
            _goToGreContext.SaveChanges();
            Member deleted = _goToGreContext.Member.Where(x => x.Id == member.Id).FirstOrDefault();
            return (deleted == default);
        }
        
    }
}
