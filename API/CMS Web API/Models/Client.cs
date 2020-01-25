using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace CMS_Web_API.Models
{
    public class Client
    {
        public int Cust_id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public int Pincode { get; set; }
    }


    //Class for reading the data from clients table
    public class ReadClient: Client
    {
        //constructor for reading the data from table rowwise
        public ReadClient(DataRow row)
        {
            Cust_id = Convert.ToInt32(row["Cust_id"]);
            Name = row["Name"].ToString();
            Email = row["Email"].ToString();
            Phone = row["Phone"].ToString();
            Address = row["Address"].ToString();
            Pincode = Convert.ToInt32(row["Pincode"]);
        }

    }
}
