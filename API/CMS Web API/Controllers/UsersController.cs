using CMS_Web_API.Models;
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
    [Route("api/users")]
    public class UsersController : ApiController
    {
        // GET: api/Users
        //Declare SqlConnection and command objects here
        private SqlConnection con;
        private SqlDataAdapter adapter;
        public IEnumerable<Users> Get()
        {
            con = new SqlConnection("Data Source=PRATIK\\SQLEXPRESS01; Initial Catalog = CMS; integrated security=True");
            DataTable dt = new DataTable();
            var query = "select * from Users_table";
            adapter = new SqlDataAdapter(query, con);
            adapter.Fill(dt);
            List<Users> userslist = new List<Users>(dt.Rows.Count);
            if (dt.Rows.Count>0)
            {
                foreach(DataRow usersrecord in dt.Rows)
                {
                    userslist.Add(new ReadUsers(usersrecord));
                }
            }
            return (userslist);
        }

        // GET: api/Users/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Users
        public void Post([FromBody]Users value)
        {
            con = new SqlConnection("Data Source=PRATIK\\SQLEXPRESS01; Initial Catalog = CMS; integrated security=True");
            var query = "insert into Users_table(UserName, Password, DisplayName) values(@USerName, @Password, @DisplayName)";
            SqlCommand insertcommand = new SqlCommand(query, con);
            insertcommand.Parameters.AddWithValue("@UserName", value.UserName);
            insertcommand.Parameters.AddWithValue("@Password", value.Password);
            insertcommand.Parameters.AddWithValue("@DisplayName", value.DisplayName);
            con.Open();
            insertcommand.ExecuteNonQuery();
            con.Close();
        }

        [HttpPost]
        [Route("api/users/login")]
        public List<Users> login([FromBody]Users value)
        {
            con = new SqlConnection("Data Source=PRATIK\\SQLEXPRESS01; Initial Catalog = CMS; integrated security=True");
            DataTable dt = new DataTable();
            var query = "Select * from Users_table where UserName = '"+value.UserName+"' and Password = '"+value.Password+"'";
            adapter = new SqlDataAdapter(query, con);
            adapter.Fill(dt);
            List<Users> users = new List<Users>(dt.Rows.Count);
            if (dt.Rows.Count>0)
            {
                foreach (DataRow usersrecord in dt.Rows)
                {
                    users.Add(new ReadUsers(usersrecord));
                }
            }
            return users;
        }


        // PUT: api/Users/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Users/5
        public void Delete(int id)
        {
        }
    }
}
