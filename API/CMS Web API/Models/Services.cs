using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace CMS_Web_API.Models
{
    public class Services
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
    }


    public class ReadServices : Services 
    {
        //constructor for reading the data form services table
        public ReadServices(DataRow row)
        {
            Name = row["Name"].ToString();
            Description = row["Description"].ToString();
            Price = Convert.ToInt32(row["Price"]);
        }
    }
}