using System;
using Xunit;
using GoToGre.BackEnd.Controllers;
using FakeItEasy;
using GoToGre.BackEnd.Context;
using Microsoft.EntityFrameworkCore;
using GoToGre.BackEnd.Repos;
using GoToGre.Common.Models;
using System.Collections.Generic;

namespace GoToGre.FrontEnd.Test
{
    public class ProductControllerTests
    {
        [Fact]
        public void Get_All_Products()
        {
            // Setup
            var context = new GoToGreContext();
            var repo = new GoToGreRepo(context);
            var controller = new ProductsController(repo);

            // Arrange
            IEnumerable<Product> ProductEnum = controller.Get();
            List<Product> ProductList = (List<Product>)ProductEnum;

            // int count = Enum.GetValues(typeof(Member)).Length;


            // Assert
            Assert.Equal(4, ProductList.Count);
            //Test the list count and measure it to a value
        }






        [Fact]
        public void Get_Product_By_Id()
        {
            // Setup
            var context = new GoToGreContext();
            var repo = new GoToGreRepo(context);
            var controller = new ProductsController(repo);
            int testId = 1;

            // Arrange

            Product testGet = controller.Get(testId);



            // Assert
            Assert.Equal("Apple", testGet.Name);
        }



        [Fact]
        public void Get_Product_By_Type()
        {
            // Setup
            var context = new GoToGreContext();
            var repo = new GoToGreRepo(context);
            var controller = new ProductsController(repo);
            //int testId = 1;

            // Arrange

            List<Product> typeList = controller.GetByType("Vegetable");





            // Assert
            Assert.NotEmpty(typeList);
        }




        [Fact]
        public void Add_Product()
        {
            // Setup
            var context = new GoToGreContext();
            var repo = new GoToGreRepo(context);
            var controller = new ProductsController(repo);
            int testId = 14;


            // Arrange
            Product productTest1 = new Product (14, "Tomatoe","", "Vegetable", 4, 8.0);
            Product productTest2 = new Product(15, "Cucumber", "", "Vegetable", 2, 4.0);
            Product addProductTest4 = controller.Post(productTest1);

            Product testGet = controller.Get(testId);

            // Assert

            Assert.Equal("Tomatoe", testGet.Name);
        }




        [Fact]
        public void Update_Product()
        {
            // Setup
            var context = new GoToGreContext();
            var repo = new GoToGreRepo(context);
            var controller = new ProductsController(repo);
            int testId = 1;


            // Arrange

            //testMember = new Member(1, "Bob", "Job", "0435538123", 120, "");
            Product productTest2 = new Product(1, "Potatoe","","", 5, 7.8);
            Product testUpdate = controller.Put(productTest2);
            Product testGet = controller.Get(testId);


            // Assert
            Assert.Equal("Potatoe", testGet.Name);

        }


        [Fact]
        public void Delete_Product()
        {
            // Setup
            var context = new GoToGreContext();
            var repo = new GoToGreRepo(context);
            var controller = new ProductsController(repo);


            // Arrange
            int testId = 12;
            //Product(4, "Grapes", 9, 23.2);
            
            controller.Delete(12);
            controller.Delete(13);
            Product testGet = controller.Get(testId);

            // Assert

            Assert.NotEqual(12, testGet.Id);
        }
    }
}
