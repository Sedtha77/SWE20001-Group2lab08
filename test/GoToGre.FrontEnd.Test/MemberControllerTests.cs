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
    public class MembersControllerTests
    {
        //Timer tests

        [Fact]
        public void Get_All_Members()
        {
            // Setup
            var context = new GoToGreContext();
            var repo = new GoToGreRepo(context);
            var controller = new MemberController(repo);

            // Arrange
    //        IEnumerable<Member> MemberEnum = controller.Get();
         ///   List<Member> MemberList = (List<Member>)MemberEnum;
            
            // int count = Enum.GetValues(typeof(Member)).Length;
            

            // Assert
     //       Assert.Equal(3, MemberList.Count);
            //Test the list count and measure it to a value
        }






       

        [Fact]
        public void Get_Member_By_Id()
        {
            // Setup
            var context = new GoToGreContext();
            var repo = new GoToGreRepo(context);
            var controller = new MemberController(repo);
            int testId = 1;

            // Arrange

            Member testGet = controller.Get(testId);
           


            // Assert
            Assert.Equal("Bob", testGet.FirstName);
        }




        [Fact]
        public void Add_Member()
        {
            // Setup
            var context = new GoToGreContext();
            var repo = new GoToGreRepo(context);
            var controller = new MemberController(repo);
            int testId = 2;


            // Arrange
           
            
            var testMember2 = new Member(2, "Mike", "Down", "0435532342", 120, "");
            var testMember3 = new Member(3, "Even", "Steven", "0435539802", 150, "");
            var testMember4 = new Member(4, "Own", "Jo", "0435531242", 190, "");

            
            Member testAdd2 = controller.Post(testMember2);
            Member testAdd3 = controller.Post(testMember3);
            Member testAdd4 = controller.Post(testMember4);

            Member testGet = controller.Get(testId);

            // Assert

            Assert.Equal(120, testGet.Points);
        }


        [Fact]
        public void Update_Member()
        {
            // Setup
            var context = new GoToGreContext();
            var repo = new GoToGreRepo(context);
            var controller = new MemberController(repo);
            int testId = 1;


            // Arrange

            //testMember = new Member(1, "Bob", "Job", "0435538123", 120, "");
            Member updateMember = new Member(1, "Mohamed", "Hanad", "043553892", 120, "");
            Member testUpdate = controller.UpdateUser(updateMember);
            Member testGet = controller.Get(testId);


            // Assert
            Assert.Equal("Mohamed", testGet.FirstName);

        }



        [Fact]
        public void Delete_Member()
        {
            // Setup
            var context = new GoToGreContext();
            var repo = new GoToGreRepo(context);
            var controller = new MemberController(repo);

           
            // Arrange
            int testId = 4;
            //Member(4, "Own", "Jo", "0435531242", 190, "");
            bool testDelete = controller.Delete(testId);

            // Assert

            Assert.True(testDelete);
        }




    }
}
