using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoToGre.BackEnd.Context;
using GoToGre.Common.Models;
using Microsoft.EntityFrameworkCore;

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
        public void UpdateMember(Member member)
        {
            _goToGreContext.Member.Update(member);
            _goToGreContext.SaveChanges();
        }
        /*
        public List<Procut> getAllMember()
        {
            return _goToGreContext.Member.AsEnumerable().ToList();
        }
        */
        public List<Product> GetAllProducts() {
            return _goToGreContext.Products.ToList();
        }
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

        public List<Sale> getAllSales()
        {
            return _goToGreContext.Sales.Include(s => s.SaleItems).ThenInclude(si => si.Product).Include(s => s.Customer).ToList();

        }
        public Sale GetSaleById(int id) {
            return _goToGreContext.Sales.Where(s => s.Id == id).Include(s => s.SaleItems).ThenInclude(si => si.Product).Include(s=>s.Customer).FirstOrDefault();
        }
        public List<Sale> GetSalesByMemberId(int id)
        {
            return _goToGreContext.Sales.Where(s => s.Customer.Id == id).Include(s => s.SaleItems).ThenInclude(si => si.Product).ToList();
        }
        public void AddSale(Sale sale) {
            _goToGreContext.Sales.Add(sale);
            _goToGreContext.SaveChanges();
        }
        public void UpdateSale(Sale sale) {
            _goToGreContext.Sales.Update(sale);
            _goToGreContext.SaveChanges();
        }
        public List<Sale> getSalesBetweenDates(DateTime start, DateTime end) {
            return _goToGreContext.Sales.Where(s => Between(s.TimeStamp, start, end)).Include(s => s.SaleItems).ThenInclude(si => si.Product).ToList();
        }
        public List<SaleItem> getSaleItemsWithProductBetween(Product product, DateTime start, DateTime end) {
            return _goToGreContext.SaleItems.Where(si => (si.Product == product) && (Between(si.Sale.TimeStamp, start, end))).ToList();
        }
        public void DeleteSale(int id)
        {
            Sale toRemove = _goToGreContext.Sales.Where(s => s.Id == id).FirstOrDefault();
            if (toRemove == default) return;
            _goToGreContext.Sales.Remove(toRemove);
            _goToGreContext.SaveChanges();
        }
        public void DeleteSaleItem(int id) {
            var saleItem = _goToGreContext.SaleItems.Where(s => s.Id == id).FirstOrDefault();
            if (saleItem == default) return;
            _goToGreContext.SaleItems.Remove(saleItem);
        }
        public Image GetImage(int id) {
            return _goToGreContext.Images.Where(i => i.Id == id).FirstOrDefault();
        }
        public void AddImage(Image image) {
            _goToGreContext.Images.Add(image);
            _goToGreContext.SaveChanges();
        }
        public void DeleteImage(Image image) {
            _goToGreContext.Images.Remove(image);
            _goToGreContext.SaveChanges();
        }
        public static bool Between(DateTime input, DateTime date1, DateTime date2)
        {
            return (input > date1 && input < date2);
        }
    }
}
