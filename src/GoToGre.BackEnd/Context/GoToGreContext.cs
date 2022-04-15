using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using GoToGre.Common.Models;
using Npgsql.EntityFrameworkCore.PostgreSQL;
namespace GoToGre.BackEnd.Context
{
    public class GoToGreContext : DbContext
    {
        private readonly string _dbString;
        public GoToGreContext()
        {
            _dbString = $"Host=vm.lance3092.me;Username=usr;Password=pwd1234;Database=gotogre";
        }
        public GoToGreContext(string hostName,string username,string password,string databasename)
        {
            _dbString = $"Host={hostName};Username={username};Password={password};Database={databasename}";

        }
        public DbSet<Member> Member { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Sale> Sales { get; set; }
        public DbSet<SaleItem> SaleItems { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseNpgsql(@"Host=myserver;Username=mylogin;Password=mypass;Database=mydatabase");
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Sale>()
                .HasOne(s => s.Customer)
                .WithMany(m => m.Sales);
            modelBuilder.Entity<SaleItem>().HasOne(s => s.Sale).WithMany(s => s.SaleItems);
            modelBuilder.Entity<SaleItem>().HasOne(s => s.Product);
        }
    }
}
