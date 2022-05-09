using System;
using Xunit;
using GoToGre.BackEnd.Controllers;
using FakeItEasy;
using GoToGre.BackEnd.Context;
using Microsoft.EntityFrameworkCore;
using GoToGre.BackEnd.Repos;
using GoToGre.Common.Models;

namespace GoToGre.FrontEnd.Test
{
    public class MembersControllerTests
    {


        [Fact]
        public void Get_All_Members()
        {
            // Setup
            var context = new GoToGreContext();
            var repo = new GoToGreRepo(context);
            var controller = new MemberController(repo);

            // Arrange
            


            // Assert
            
        }





        [Fact]
        public void Get_Member_By_Id()
        {
            // Setup
            var context = new GoToGreContext();
            var repo = new GoToGreRepo(context);
            var controller = new MemberController(repo);

            // Arrange
            int testId = 9;
            Member testGet = controller.Get(testId);
           


            // Assert
            Assert.Equal("Keanthai", testGet.FirstName);
        }



        [Fact]
        public void Add_Member()
        {
            // Setup
            var context = new GoToGreContext();
            var repo = new GoToGreRepo(context);
            var controller = new MemberController(repo);
            // (int id = 0, string firstName = "",string lastName = "",string phoneNumber = "", int points = 0,string imageURL = "")
            // Arrange
            int testId = 1;
            var testMember = new Member(1,"Bob","Job", "0435538123",120,"");
            Member testAdd = controller.Post(testMember);
            Member testGet = controller.Get(testId);

            // Assert

            Assert.Equal("Bob", testGet.FirstName);
        }



    }
}
