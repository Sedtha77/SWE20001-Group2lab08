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
        public List<Member> getAllMembers()
        {
            return _goToGreContext.Members.AsEnumerable().ToList();
        }
        public Member GetMember(int id)
        {
            return _goToGreContext.Members.Where(m => m.Id == id).FirstOrDefault();
        }
        public void AddMember(Member member)
        {
            _goToGreContext.Members.Add(member);
            _goToGreContext.SaveChanges();
        }
        public bool DeleteMember(Member member)
        {
            _goToGreContext.Remove(member);
            _goToGreContext.SaveChanges();
            Member deleted = _goToGreContext.Members.Where(x => x.Id == member.Id).FirstOrDefault();
            return (deleted == default);
        }
        
    }
}
