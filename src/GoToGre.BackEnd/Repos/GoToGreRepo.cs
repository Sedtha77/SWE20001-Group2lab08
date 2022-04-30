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
        public void UpdateMember(Member member)
        {
            _goToGreContext.Member.Update(member);
            _goToGreContext.SaveChanges();
        }
        public bool DeleteMember(Member member)
        {
            _goToGreContext.Remove(member);
            _goToGreContext.SaveChanges();
            Member deleted = _goToGreContext.Member.Where(x => x.Id == member.Id).FirstOrDefault();
            return (deleted == default);
        }
        /*
        public List<Procut> getAllMember()
        {
            return _goToGreContext.Member.AsEnumerable().ToList();
        }
        */
        public Product GetProductByID(int id)
        {
            return _goToGreContext.Products.Where(m => m.Id == id).FirstOrDefault();
        }
        public void UpdateProduct(Product product)
        {
            _goToGreContext.Products.Update(product);
            _goToGreContext.SaveChanges();

        }
        public List<Product> GetProductsByType(string productType)
        {
            return _goToGreContext.Products.Where(m => m.ProductType == productType).ToList();
        }
        public Product AddProduct(Product product)
        {
            Microsoft.EntityFrameworkCore.ChangeTracking.EntityEntry<Product> test = _goToGreContext.Products.Add(product);
            _goToGreContext.SaveChanges();
            return product;
        }
        public bool DeleteProduct(Product product)
        {
            _goToGreContext.Remove(product);
            _goToGreContext.SaveChanges();
            Product deleted = _goToGreContext.Products.Where(x => x.Id == product.Id).FirstOrDefault();
            return (deleted == default);
        }
    }
}
