using CMS_Web_API.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CMS_Web_API.Controllers
{
    [Route("api/orders")]
    public class OrdersController : ApiController
    {
        // GET: api/Orders
        //Declare the sqlCoection and commands objects here
        private SqlConnection con;
        //private SqlDataAdapter adapter;
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Orders/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Orders
        [HttpPost]
        public void Post([FromBody]Orders value)
        {
            con = new SqlConnection("Data Source=PRATIK\\SQLEXPRESS01; Initial Catalog = CMS; integrated security=True");
            var query = "insert into orders(Cust_id, Date) values(@Cust_id, @Date);select scope_identity()";
            SqlCommand cmd = new SqlCommand(query, con);
            cmd.Parameters.AddWithValue("@Cust_id", value.Cust_id);
            cmd.Parameters.AddWithValue("@Date", value.Date);
            con.Open();
            int OrderId = Convert.ToInt32(cmd.ExecuteScalar());
            if (value.Order_Details.Count > 0) {
                for (int j = 0; j < value.Order_Details.Count; j++)
                {
                    string detailsQuery = "insert into order_details (order_id,item,quantity,cost) values(@order_id,@item,@quantity,@cost)";
                    SqlCommand insertcommand = new SqlCommand(detailsQuery, con);
                    insertcommand.Parameters.AddWithValue("@order_id", OrderId);
                    insertcommand.Parameters.AddWithValue("@item", value.Order_Details[j].Item);
                    insertcommand.Parameters.AddWithValue("@quantity", value.Order_Details[j].Quantity);
                    insertcommand.Parameters.AddWithValue("@cost", value.Order_Details[j].Cost);
                    insertcommand.ExecuteNonQuery();
                }
            }
        con.Close();
        }

        // PUT: api/Orders/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Orders/5 
        public void Delete(int id)
        {
        }
    }
}
