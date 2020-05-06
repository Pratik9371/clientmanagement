using CMS_Web_API.Models;
using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using System;
using System.Collections.Generic;
using System.Data;
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
        private SqlDataAdapter adapter;
        public IEnumerable<Orders_ui> Get()
        {
            con = new SqlConnection("Data Source=PRATIK\\SQLEXPRESS01; Initial Catalog = CMS; integrated security=True");
            DataTable ordersData = new DataTable();
          
            //var query = "select orders.Cust_id, orders.Date, orders.Order_id, order_details.Order_details_id, order_details.service, order_details.quantity, order_details.price from orders inner join order_details on orders.Order_id = order_details.Order_id";
            //adapter = new SqlDataAdapter(query, con);
            //adapter.Fill(dt);
            
            
            //here we are creating a list of orders object and setting its capacity to dt.rows.count
             // List<Orders> orders = new List<Orders>(dt.Rows.Count);
           
                DataSet ds = new DataSet();
                SqlCommand sqlComm = new SqlCommand("spGetAllOrders", con);

                sqlComm.CommandType = CommandType.StoredProcedure;

                SqlDataAdapter da = new SqlDataAdapter();
                da.SelectCommand = sqlComm;
                
                da.Fill(ds);
            ordersData = ds.Tables[0];
            //hi list banavli
            List<Orders_ui> orders = new List<Orders_ui>();

            //-- ha for loop orders table var firnar ani list madhe sarva data read karun add karnar
            for (int i = 0; i < ordersData.Rows.Count; i++)
            {
                Orders_ui orderobj = new Orders_ui();
                orderobj.name = ordersData.Rows[i]["name"].ToString();
                orderobj.Date = ordersData.Rows[i]["Date"].ToString();
                orderobj.Order_id = ordersData.Rows[i]["Order_id"].ToString();
                //ok ? yes


                // intialize order_details with empty list
                orderobj.Order_Details = new List<Order_details>();
                DataTable ordersDetailsData = new DataTable();

                //ikde second table read kartoy sp maddun
                ordersDetailsData = ds.Tables[1];

                // ani tya var for loop firawtoy
                for (int j=0; j < ordersDetailsData.Rows.Count; j++) {



//1  1   hairstyle   1   100
//1   2   facial  1   200
//2   3   hairstyle   1   100
//3   4   hairstyle   1   100


                    //ikde check kartoy ki current row madhle order_id ha current order cha id ahe ka
                    // manje current order is line 55 
                    // tikde current order cha id milel //ok ? yes

                    // ha comare true asla tar tya row madhe bakiche details read karun 

                    if (Convert.ToString(ordersDetailsData.Rows[j]["Order_id"]) == orderobj.Order_id) {

                        //eks order_details cha object madhe thewto
                        Order_details order_Details = new Order_details();
                        order_Details.Order_id = ordersDetailsData.Rows[j]["Order_id"].ToString();
                        order_Details.price = ordersDetailsData.Rows[j]["price"].ToString();
                        order_Details.quantity = ordersDetailsData.Rows[j]["quantity"].ToString();
                        order_Details.Order_Details_id = ordersDetailsData.Rows[j]["Order_Details_id"].ToString();
                        order_Details.service = ordersDetailsData.Rows[j]["service"].ToString();
                        //ani ti order_details current order cha array madhe add karun takto// confusion ? oo shit N kam ahi karat Noo
                        orderobj.Order_Details.Add(order_Details);
                    }
                }
                // finally.. order ji banli ti orders cha list madhe add karto
                orders.Add(orderobj);
            }

          
            ///and orders je banavle / read kele te client la return karto
            ///
            //zala..ha

            /// aata jo return milala ahe te integrate kar client madhe
            /// oooooook
            return (orders) ;

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
                    string detailsQuery = "insert into order_details (order_id,service,quantity,    price) values(@order_id,@service,@quantity,@price)";
                    SqlCommand insertcommand = new SqlCommand(detailsQuery, con);
                    insertcommand.Parameters.AddWithValue("@order_id", OrderId);
                    insertcommand.Parameters.AddWithValue("@service", value.Order_Details[j].service);
                    insertcommand.Parameters.AddWithValue("@quantity", value.Order_Details[j].quantity);
                    insertcommand.Parameters.AddWithValue("@price", value.Order_Details[j].price);
                    insertcommand.ExecuteNonQuery();
                }
            }
             con.Close();


            
            //Creating an intance of class MimeMessage.
            MimeMessage message = new MimeMessage();

            //Add from
            MailboxAddress from = new MailboxAddress("admin", "pppyt9371@gmail.com");
            message.From.Add(from);

            //Add to
            MailboxAddress to = new MailboxAddress("user", "pppyt9371@gmail.com");
            message.To.Add(to);

            //Add Subject
            message.Subject = "Invoice : Your invoice for order #"+OrderId;

            //Add email body
            BodyBuilder bodyBuilder = new BodyBuilder();
            EmailBody emailBodyObj = new EmailBody();
           

            bodyBuilder.HtmlBody = emailBodyObj.htmlbody(value);

            message.Body = bodyBuilder.ToMessageBody();

            //Connect and authenticate with the SMTP server
            SmtpClient client = new SmtpClient();
            client.Connect("smtp.gmail.com", 587, SecureSocketOptions.StartTls);


            // client.AuthenticationMechanisms.Remove("XOAUTH2");

            client.Authenticate("pppyt9371@gmail.com", "activa9371");
            client.Send(message);
            client.Disconnect(true);
            client.Dispose();
            //return "Email sent";
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
