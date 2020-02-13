using CMS_Web_API.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace CMS_Web_API.Controllers
{
    [Route("api/clients")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ClientController : ApiController
    {
        // GET: api/Client
        //Declare sql connection and command object
        private SqlConnection con;
        private SqlDataAdapter adapter;

        public IEnumerable<Client> Get()
        {
            con = new SqlConnection("Data Source=PRATIK\\SQLEXPRESS01; Initial Catalog = CMS; integrated security=True");
            DataTable dt = new DataTable();
            var query = "select * from Clients_table";
            adapter = new SqlDataAdapter(query, con);
            adapter.Fill(dt);
            //here we are creating a list of students object and setting its capacity to dt.Rows.Count
            List<Client> clients = new List<Client>(dt.Rows.Count);
            if (dt.Rows.Count > 0)
            {
                foreach (DataRow clientsrecord in dt.Rows)
                {
                    clients.Add(new ReadClient(clientsrecord));
                }
            }

            return (clients);
        }

        // GET: api/Client/5
        [HttpGet]
        [Route("api/clients/{clientid}")]
        public IEnumerable<Client> Get(int clientid)
        {
            con = new SqlConnection("Data Source=PRATIK\\SQLEXPRESS01; Initial Catalog = CMS; integrated security=True");
            DataTable dt = new DataTable();
            var query = "select * from Clients_table where Cust_id="+clientid;
            adapter = new SqlDataAdapter(query, con);
            adapter.Fill(dt);
            //here we are creating a list of students object and setting its capacity to dt.Rows.Count
            List<Client> clients = new List<Client>(dt.Rows.Count);
            if (dt.Rows.Count > 0)
            {
                foreach (DataRow clientsrecord in dt.Rows)
                {
                    clients.Add(new ReadClient(clientsrecord));
                }
            }

            return (clients);
        }

        // POST: api/Client
        public void Post([FromBody]Client value)
        {
            con = new SqlConnection("Data Source=PRATIK\\SQLEXPRESS01; Initial Catalog = CMS; integrated security=True");
            var query = "insert into Clients_table(Name, Email, Phone, Address, Pincode) values (@Name, @Email, @Phone, @Address, @Pincode)";
            SqlCommand insertcommand = new SqlCommand(query, con);
            insertcommand.Parameters.AddWithValue("@Name", value.Name);
            insertcommand.Parameters.AddWithValue("@Email", value.Email);
            insertcommand.Parameters.AddWithValue("@Phone", value.Phone);
            insertcommand.Parameters.AddWithValue("@Address", value.Address);
            insertcommand.Parameters.AddWithValue("@Pincode", value.Pincode);
            con.Open();
            insertcommand.ExecuteNonQuery();
            con.Close();
        }

        // PUT: api/Client/5
        public void Put(int id, [FromBody]Client value)
        {
            con = new SqlConnection("Data Source=PRATIK\\SQLEXPRESS01; Initial Catalog = CMS; integrated security=True");
            var query = "update Clients_table set Name=@Name, Email=@Email, Phone=@Phone, Address=@Address, Pincode=@Pincode where Cust_id=" + id;
            SqlCommand insertcommand = new SqlCommand(query, con);
            insertcommand.Parameters.AddWithValue("@Name", value.Name);
            insertcommand.Parameters.AddWithValue("@Email", value.Email);
            insertcommand.Parameters.AddWithValue("@Phone", value.Phone);
            insertcommand.Parameters.AddWithValue("@Address", value.Address);
            insertcommand.Parameters.AddWithValue("@Pincode", value.Pincode);
            con.Open();
            insertcommand.ExecuteNonQuery();
            con.Close();
        }

        // DELETE: api/Client/5
        public void Delete(int id)
        {
            con = new SqlConnection("Data Source=PRATIK\\SQLEXPRESS01; Initial Catalog = CMS; integrated security=True");
            var query = "delete from Clients_table where Cust_id=" + id;
            SqlCommand insertcommand = new SqlCommand(query, con);
            con.Open();
            insertcommand.ExecuteNonQuery();
            con.Close();
        }
    }
}
