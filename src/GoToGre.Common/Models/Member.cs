using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace GoToGre.Common.Models
{
    public class Member
    {
        public Member() { }
        public Member(int id =0, string name = "", int points = 0 ,string imageURL = "")
        {
            Id = id;
            Name = name;
            Points = points;
            ImageURL = imageURL;
            //Sales = new List<Sale>();
        }
        [Key]
        public int Id { get; set; } 
        public string Name { get; set; }
        public DateTime DateOfBirtch { get; set; }
        public string ImageURL { get; set; }
        public int Points { get; set; }
        public List<Sale> Sales { get; set; }
    }
}
