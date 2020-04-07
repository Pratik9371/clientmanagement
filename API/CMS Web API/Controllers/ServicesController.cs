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
    [Route("api/services")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ServicesController : ApiController
    {
        // GET: api/Services
        //Declare sqlconnection and commnad object
        private SqlConnection con;
        private SqlDataAdapter adapter;

        public IEnumerable<Services> Get()
        {
            con = new SqlConnection("Data Source=PRATIK\\SQLEXPRESS01; Initial Catalog = CMS; integrated security=True");
            DataTable dt = new DataTable();
            var query = "select * from services";
            adapter = new SqlDataAdapter(query, con);
            adapter.Fill(dt);
            //here we are creating a list of students object and setting its capacity to dt.Rows.Count
            List<Services> services_list = new List<Services>(dt.Rows.Count);
            if (dt.Rows.Count > 0)
            {
                foreach (DataRow clientsrecord in dt.Rows)
                {
                    services_list.Add(new ReadServices(clientsrecord));
                }
            }

            return (services_list);      
        }

        // GET: api/Services/5
    
     
        // POST: api/Services
        public void Post([FromBody]Services value)
        {
            con = new SqlConnection("Data Source = PRATIK\\SQLEXPRESS01; Initial Catalog = CMS; integrated security = True");
            var query = "insert into services(Name, Description, Price) values(@Name, @Description, @Price)";
            SqlCommand insertcommand = new SqlCommand(query, con);
            insertcommand.Parameters.AddWithValue("@Name", value.Name);
            insertcommand.Parameters.AddWithValue("@Description", value.Description);
            insertcommand.Parameters.AddWithValue("@Price", value.Price);
            con.Open();
            insertcommand.ExecuteNonQuery();
            con.Close();
        }

        // PUT: api/Services/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Services/5
        public void Delete(int id)
        {
        }
    }
}
