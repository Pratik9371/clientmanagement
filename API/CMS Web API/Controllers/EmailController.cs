using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;

namespace CMS_Web_API.Controllers
{
    [Route("api/email")]
    public class EmailController : ApiController
    {
        EmailBody emailbodyobj = new EmailBody();
        // GET: api/Email
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Email/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Email
        public string Post([FromBody]MimeMessage value)
        {
            //Creating an intance of class MimeMessage.
            MimeMessage message = new MimeMessage();

            //Add from
            MailboxAddress from = new MailboxAddress("admin", "pppyt9371@gmail.com");
            message.From.Add(from);

            //Add to
            MailboxAddress to = new MailboxAddress("user", "pppyt9371@gmail.com");
            message.To.Add(to);

            //Add Subject
            message.Subject = "This is email subject";

            //Add email body
            BodyBuilder bodyBuilder = new BodyBuilder();
            //bodyBuilder.TextBody = "Hello World";
            bodyBuilder.HtmlBody = emailbodyobj.htmlbody();

            message.Body = bodyBuilder.ToMessageBody();

            //Connect and authenticate with the SMTP server
            SmtpClient client = new SmtpClient();
            client.Connect("smtp.gmail.com", 587,  SecureSocketOptions.StartTls);
            

           // client.AuthenticationMechanisms.Remove("XOAUTH2");

            client.Authenticate("pppyt9371@gmail.com", "activa9371");
            client.Send(message);
            client.Disconnect(true);
            client.Dispose();
            return "Email sent";

        }

        // PUT: api/Email/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Email/5
        public void Delete(int id)
        {
        }
    }
}
