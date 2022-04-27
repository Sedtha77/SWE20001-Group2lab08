using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace GoToGre.Common.Models
{
    public class Member
    {
        public Member() { }
        public Member(int id =0, string firstName = "",string lastName = "" ,string phoneNumber = "", int points = 0 ,string imageURL = "")
        {
            Id = id;
            FirstName = firstName;
            Points = points;
            ImageURL = imageURL;
            LastName = lastName;
            PhoneNumer = phoneNumber;
            //Sales = new List<Sale>();
        }
        [Key]
        public int Id { get; set; } 
        public string FirstName { get; set; }
        public string LastName  { get; set; }
        public string PhoneNumer { get; set; }
        public DateTime DateOfBirtch { get; set; }
        public string ImageURL { get; set; }
        public int Points { get; set; }
    }
}
