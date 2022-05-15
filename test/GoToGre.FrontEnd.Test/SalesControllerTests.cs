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
   public class SalesControllerTests
    {

        [Fact]
        public void Get_All_Products()
        {
            // Setup
            var context = new GoToGreContext();
            var repo = new GoToGreRepo(context);
            var controller = new SalesController(repo);

            // Arrange
            IEnumerable<Sale> SaleEnum = controller.Get();
            List<Sale> SaleList = (List<Sale>)SaleEnum;

            // int count = Enum.GetValues(typeof(Member)).Length;


            // Assert
            Assert.NotEmpty(SaleList);
            //Test the list count and measure it to a value
        }

        [Fact]
        public void Get_Sale_By_Id()
        {
            // Setup
            var context = new GoToGreContext();
            var repo = new GoToGreRepo(context);
            var controller = new SalesController(repo);
            int testId = 1;

            // Arrange

            Sale testGet = controller.Get(testId);



            // Assert
            Assert.Equal(testId, testGet.Id);
        }

        [Fact]
        public void Get_Sale_By_Member_Id()
        {
            // Setup
            var context = new GoToGreContext();
            var repo = new GoToGreRepo(context);
            var controller = new SalesController(repo);
            int testId = 4;

            // Arrange

            List<Sale> memberList = controller.GetMemberSales(testId);





            // Assert
            Assert.Single(memberList);
        }

        

        [Fact]
        public void Sales_Between_Dates()
        {
            // Setup
            var context = new GoToGreContext();
            var repo = new GoToGreRepo(context);
            var controller = new SalesController(repo);
            int testId = 1;

            // Arrange
            Sale testGet = controller.Get(testId);
            //

            var str = "2022-05-13T10:39:38.614000";
            DateTime dt;
            var isValidDate = DateTime.TryParse(str, out dt);
            
            // Assert
            Assert.Equal(dt, testGet.TimeStamp);
        }

        [Fact]
        public void Sales_Add()
        {
            // Setup
            var context = new GoToGreContext();
            var repo = new GoToGreRepo(context);
            var controller = new SalesController(repo);
            Sale testSale = new Sale();
            int testId = 2;

            // Arrange
           // controller.Post(testSale);
            Sale testGet = controller.Get(testId);

            //



            // Assert
            Assert.Equal(testId, testGet.Id);
        }


        [Fact]
        public void Sales_Update()
        {
            // Setup
            var context = new GoToGreContext();
            var repo = new GoToGreRepo(context);
            var controller = new SalesController(repo);
            Sale testSale = new Sale();
            testSale.Id= 2;
            testSale.TotalPrice = 6.9;
            int testId = 2;
            //int testUpdateId = 3;

            // Arrange
            controller.Put(testSale);
            Sale testGet = controller.Get(testId);


            // Assert
            Assert.Equal(6.9, testGet.TotalPrice);
        }

        [Fact]
        public void Sales_Delete()
        {
            // Setup
            var context = new GoToGreContext();
            var repo = new GoToGreRepo(context);
            var controller = new SalesController(repo);
            int testId = 2;
            //int testUpdateId = 3;

            // Arrange
            controller.Delete(testId);
            Sale testGet = controller.Get(testId);


            // Assert
            Assert.Null(testGet);
        }









    }
}
