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
        private SqlConnection;
        private SqlDataAdapter;
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
        public void Post(Orders value)
        {
            Console.Write(value);
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
