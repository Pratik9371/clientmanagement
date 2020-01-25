using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace CMS_Web_API.Models
{
    public class Orders
    {
        int Cust_id { get; set; }
        string orderDate { get; set; }
        int Order_id { get; set; }
        ICollection<Order_details> order_details { get; set; }   // Icollection is used for array , collection of items
    }
    public class Order_details {
        int Order_details_id { get; set; }
        string Item { get; set; }
        int Quantity { get; set; }
        int Cost { get; set; }
    }
}