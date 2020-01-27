using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace CMS_Web_API.Models
{
    public class Orders
    {
        public string Cust_id { get; set; }
        public string Date { get; set; }
        public string Order_id { get; set; }
        public  ICollection<Order_details> Order_Details { get; set; }   // Icollection is used for array , collection of items
    }
    public class Order_details {
        public string Order_Details_id { get; set; }
        public string Item { get; set; }
        public string Quantity { get; set; }
        public string Cost { get; set; }
        public string Order_id { get; set; }
    }
}