using CMS_Web_API.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CMS_Web_API.Models;

namespace CMS_Web_API
{
    public class EmailBody
    {
        public string htmlbody(Orders value )
        {
            string emailbody = @"<html>
                                    <body>
                                        <head>
                                            <style>                                
                                                  .col-md-2 {
                                                    width: 19%;
                                                    display: inline-block;
                                                    text-align: right;
                                                  }
                                                  .col-md-10 {
                                                    width: 80%;
                                                    display: inline-block;
                                                  }
                                                  table {
                                                    border-collapse: collapse;
                                                    width: 100%;
                                                  }

                                                  table,
                                                  th,
                                                  td {
                                                    border: 1px solid grey;
                                                    text-align: center;
                                                    height: 50px;
                                                  }

                                                  th {
                                                    background-color: rgb(101, 101, 200);
                                                    color: white;
                                                  }

                                                  .total {
                                                    text-align: right;
                                                    padding-top: 20px;
                                                  }
                                            </style>
                                        </head>
                                        <main>
                                          <div class='container'>
                                            <div class='row pt-5'>
                                              <div class='col-md-10'> ";



                     emailbody = emailbody + @" <p>
                                                  <b style='color: blueviolet;'>xyz coroporation</b> <br />
                                                  123 Appleview Town <br />
                                                  Bakers Street <br />
                                                  Chicago , IL 60411
                                                </p>
                                              </div>
                                              <div class='col-md-2'>
                                                <p>
                                                  <b style='color: blueviolet;'>SALES INVOICE</b> <br />
                                                  #123 <br />
                                                  jun 20, 2020
                                                </p>
                                              </div>
                                            </div>
                                            <div style='padding-bottom: 20px;'>
                                              <p>
                                                <b style='color: blueviolet;'>Bill to:</b> <br />
                                                John <br />
                                                12345678 <br />
                                                // ikde customer che details takayla lagtil je aplya kade nhi ahet sadhya
                                              </p>
                                            </div>
                                            <table>
                                              <thead>
                                                <tr>  
                                                  <th>Service</th>
                                                  <th>Quantity</th>
                                                  <th>Price</th>
                                                </tr>
                                              </thead>
                                              <tbody>";
                                                
            
            foreach (var order in value.Order_Details)
            {
                emailbody = emailbody + "<tr>" +   
                  "<td>" + order.service + "</td>" +
                  "<td>" + order.quantity + "</td>" +
                  "<td>" + order.price + "</td>" +
                  "</tr>";
            }
            emailbody = emailbody + @"</tbody>
                                            </table>
                                            <div class='total'>
                                              <h3><span style='color: blueviolet;'>Total:</span> 
                                                ikde total replace kar
                                            </h3>
                                            </div>
                                          </div>
                                        </main>
                                    </body>                                
                                 </html>";
            return emailbody;
        }
        public string htmlbody()
        {
            string emailbody = @"<html>
                                    <body>
                                        <head>
                                            <style>                                
                                                  .col-md-2 {
                                                    width: 19%;
                                                    display: inline-block;
                                                    text-align: right;
                                                  }
                                                  .col-md-10 {
                                                    width: 80%;
                                                    display: inline-block;
                                                  }
                                                  table {
                                                    border-collapse: collapse;
                                                    width: 100%;
                                                  }

                                                  table,
                                                  th,
                                                  td {
                                                    border: 1px solid grey;
                                                    text-align: center;
                                                    height: 50px;
                                                  }

                                                  th {
                                                    background-color: rgb(101, 101, 200);
                                                    color: white;
                                                  }

                                                  .total {
                                                    text-align: right;
                                                    padding-top: 20px;
                                                  }
                                            </style>
                                        </head>
                                        <main>
                                          <div class='container'>
                                            <div class='row pt-5'>
                                              <div class='col-md-10'>
                                                <p>
                                                  <b style='color: blueviolet;'>xyz coroporation</b> <br />
                                                  123 Appleview Town <br />
                                                  Bakers Street <br />
                                                  Chicago , IL 60411
                                                </p>
                                              </div>
                                              <div class='col-md-2'>
                                                <p>
                                                  <b style='color: blueviolet;'>SALES INVOICE</b> <br />
                                                  #123 <br />
                                                  jun 20, 2020
                                                </p>
                                              </div>
                                            </div>
                                            <div style='padding-bottom: 20px;'>
                                              <p>
                                                <b style='color: blueviolet;'>Bill to:</b> <br />
                                                John <br />
                                                12345678 <br />
                                                john@gmail.com
                                              </p>
                                            </div>
                                            <table>
                                              <thead>
                                                <tr>
                                                  <th>ID</th>
                                                  <th>Service</th>
                                                  <th>Quantity</th>
                                                  <th>Price</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td>1</td>
                                                  <td>Hairstyle</td>
                                                  <td>1</td>
                                                  <td>100</td>
                                                </tr>
                                                <tr>
                                                  <td>1</td>
                                                  <td>Facial</td>
                                                  <td>1</td>
                                                  <td>200</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <div class='total'>
                                              <h3><span style='color: blueviolet;'>Total:</span> 300</h3>
                                            </div>
                                          </div>
                                        </main>
                                    </body>                                
                                 </html>";
            return emailbody;
        }
    }
}