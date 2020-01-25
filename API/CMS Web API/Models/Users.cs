using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace CMS_Web_API.Models
{
    public class Users
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public string DisplayName { get; set; }
    }

    public class ReadUsers : Users
    {
        //Constructor for reading data from the table row-wise
        public ReadUsers(DataRow row)
        {
            UserName = row["UserName"].ToString();
            Password = row["Password"].ToString();
            DisplayName = row["DisplayName"].ToString();
        }
    }
}