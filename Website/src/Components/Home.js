import React, { Component } from "react";
import homeImage from "./Images/homeImage.png";
import phone from "./Images/Phone.png";
import LayerImage from "./Images/LayerImage.png";
import TeamMember from "./Images/TeamMember.png";
import "./Home.css";
import ShippersImage from "./Images/Shippers.jpeg";
import Navbar from "./Navbar";

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row first-row justify-content-center">
          <div className="col-lg-6 text-light">
            <h1 style={{fontSize: "3.5rem"}}>
              One stop for your Logistics Problem.
            </h1>
            <p style={{color: '#fff', fontSize: '1.5rem', padding: '40px 0;' }}>
              Connect with our experts for the solutions.
            </p>
            <button class="btn-white">Talk to us</button>
          </div>
          <div className="col-md-6">
            <img
              src={homeImage}
              className="image-fluid"
              height="400"
              width="400"
              alt="image"
              className="float-right"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 misson-row text-center">
            <h2 className="text-center primary-text">Software for Logistics Enterprises</h2> <br />
            <p className="" style={{maxWidth: "800px", margin: "40px auto"}}>
              Shipper Point solves the modern problem in Logistics / Transport Industry. I/t ramp up your business by digitalizing your business activities.
              Shipper Point comes with a complete suite for a Logistics /  Transport Enterprises, starting from the Order(LR) creation to Delivery(Runsheet) Report creation. The in-build Invocing module discard the 3rd party integration of any Billing softwre.Shipper Point also comes with a Customer Portal which enable your Customer to keep a track of their orders. 
            </p>
            <button className="btn btn-primary text-center">Get in touch</button>
            <img src="https://www.pinclipart.com/picdir/big/101-1013314_pc-mobile-tablet-png-clipart.png" style={{display: 'block', margin: '100px auto 10px', width: '70%'}} ></img>
          </div>
        </div>
 
        <div className="row pt-5">
          <div class="col-md-12">

          
          <h2 className="text-center primary-text" style={{padding: '40px'}}>Build-in Features</h2>
          <div className="row">
          <div className="col-md-4 text-center">
            <i class="fa fa-mobile fa-4x"></i>
            <h4>Online Software (SAAS) Platform</h4>
            <p>
              Your software is just a browser away. Manage your business on the go. 
            </p>
          </div>          
          <div className="col-md-4 text-center">
            <i class="fa fa-mobile fa-4x"></i>
            <h4>Order(LR) Creation</h4>
            <p>
              Create the order in web or mobile with some clicks.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <i class="fa fa-mobile fa-4x"></i>
            <h4>Invoicing Module</h4>
            <p>
              Just while you are accepting order, generate the invoice at the same platform.
            </p>
          </div>
          </div>


        <div className="row">
        <div className="col-md-4 text-center">
            <i class="fa fa-mobile fa-4x"></i>
            <h4>Customer Portal</h4>
            <p>
              Just like we keep you happy, keep your customers happy too. Customer Portal give your customer a clear visibilty of their orders
            </p>
          </div>
          <div className="col-md-4 text-center">
            <i class="fa fa-mobile fa-4x"></i>
            <h4>E-POD</h4>
            <p>
              With our andriod application, upload the POD and enhance your customer experience.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <i class="fa fa-mobile fa-4x"></i>
            <h4>Delivery Runsheet</h4>
            <p>
              Shipper Point give you a seamless experience to create runsheet online.
            </p>
          </div>
        </div>
          
        </div>
        </div>

       {/* <div className="row fourth-row justify-content-center">
          <div className="col-md-12 text-center">
            <h5>SEE OUR VALUES</h5>
            <h1>Learn more about us</h1>
          </div>
          <iframe
            width="1012"
            height="500"
            src="https://www.youtube.com/embed/9uOETcuFjbE"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="row fifth-row p-5">
          <div className="col-md-6">
            <img
              src={phone}
              className="image-fluid"
              height="500"
              width="500"
              alt="image"
            ></img>
          </div>
          <div className="col-md-6">
            <h1>Find the answers you need right here</h1>
            <ul className="list-unstyled pt-5">
              <li className="list-item pb-4">
                <button className="btn" data-toggle="collapse" data-target="#1">
                  <i class="fa fa-plus"></i>
                </button>{" "}
                What are our values
                <div id="1" class="collapse">
                  I am item content. Click edit button to change this text.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </div>
              </li>
              <li className="list-item pb-4">
                <button className="btn" data-toggle="collapse" data-target="#2">
                  <i class="fa fa-plus"></i>
                </button>{" "}
                Who we are
                <div id="2" class="collapse">
                  I am item content. Click edit button to change this text.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </div>
              </li>
              <li className="list-item pb-4">
                <button className="btn" data-toggle="collapse" data-target="#3">
                  <i class="fa fa-plus"></i>
                </button>{" "}
                What is our philosophy
                <div id="3" class="collapse">
                  I am item content. Click edit button to change this text.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </div>
              </li>
              <li className="list-item pb-4">
                <button className="btn" data-toggle="collapse" data-target="#4">
                  <i class="fa fa-plus"></i>
                </button>{" "}
                What are our goals
                <div id="4" class="collapse">
                  I am item content. Click edit button to change this text.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="row p-5">
          <div className="col-md-6">
            <h1 className="pb-3">
              A digital agency focused on growing your brand
            </h1>
            <p className="pb-3">
              We’re helping startups create awesome websites
            </p>
            <ul className="list-unstyled">
              <li>
                <i class="fa fa-check text-success pb-3" />
                Just a feature
              </li>
              <li>
                <i class="fa fa-check text-success pb-3" />
                Just a feature
              </li>
              <li>
                <i class="fa fa-check text-success pb-3" />
                Just a feature
              </li>
              <li>
                <i class="fa fa-check text-success pb-3" />
                Just a feature
              </li>
              <li>
                <i class="fa fa-check text-success pb-3" />
                Just a feature
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img
              src={LayerImage}
              className="image-fluid"
              height="500"
              width="500"
              alt="image"
            />
          </div>
        </div>

        <div className="text-center">
          <h1 className="pb-4">Our Plans</h1>
          <p>Simple pricig. Great products</p>
        </div>
        <div className="row">
          <div className="col-md-3 text-center box">
            <h6>Single theme</h6>
            <h1 className="text-success">
              <sup>$</sup>59
            </h1>
            <hr />
            <ul className="list-unstyled">
              <li>
                <i class="fa fa-check text-success pb-3" />
                Praesent in lobortis
              </li>
              <li>
                <i class="fa fa-check text-success pb-3" />
                Praesent in lobortis
              </li>
              <li>
                <i class="fa fa-check text-success pb-3" />
                Praesent in lobortis
              </li>
              <li>
                <i class="fa fa-check text-success pb-3" />
                Praesent in lobortis
              </li>
              <li>
                <i class="fa fa-check text-success pb-3" />
                Praesent in lobortis
              </li>
              <li>
                <i class="fa fa-check text-success pb-3" />
                Praesent in lobortis
              </li>
              <li>
                <i class="fa fa-check text-success pb-3" />
                Praesent in lobortis
              </li>
            </ul>
            <button className="btn btn-outline-success text-dark">
              CLICK HERE
            </button>
          </div>
          <div className="col-md-3 text-center box">
            <h6>Single theme</h6>
            <h1 className="text-success">
              <sup>$</sup>99
            </h1>
            <hr />
            <ul className="list-unstyled">
              <li>
                <i class="fa fa-check text-success pb-3" />
                Praesent in lobortis
              </li>
              <li>
                <i class="fa fa-check text-success pb-3" />
                Praesent in lobortis
              </li>
              <li>
                <i class="fa fa-check text-success pb-3" />
                Praesent in lobortis
              </li>
              <li>
                <i class="fa fa-check text-success pb-3" />
                Praesent in lobortis
              </li>
              <li>
                <i class="fa fa-check text-success pb-3" />
                Praesent in lobortis
              </li>
              <li>
                <i class="fa fa-check text-success pb-3" />
                Praesent in lobortis
              </li>
              <li>
                <i class="fa fa-check text-success pb-3" />
                Praesent in lobortis
              </li>
            </ul>
            <button className="btn btn-outline-success text-dark">
              CLICK HERE
            </button>
          </div>
          <div className="col-md-3 text-center box">
            <h6>Single theme</h6>
            <h1 className="text-success">
              <sup>$</sup>249
            </h1>
            <hr />
            <ul className="list-unstyled">
              <li>
                <i class="fa fa-check text-success pb-3" />
                Praesent in lobortis
              </li>
              <li>
                <i class="fa fa-check text-success pb-3" />
                Praesent in lobortis
              </li>
              <li>
                <i class="fa fa-check text-success pb-3" />
                Praesent in lobortis
              </li>
              <li>
                <i class="fa fa-check text-success pb-3" />
                Praesent in lobortis
              </li>
              <li>
                <i class="fa fa-check text-success pb-3" />
                Praesent in lobortis
              </li>
              <li>
                <i class="fa fa-check text-success pb-3" />
                Praesent in lobortis
              </li>
              <li>
                <i class="fa fa-check text-success pb-3" />
                Praesent in lobortis
              </li>
            </ul>
            <button className="btn btn-outline-success text-dark">
              CLICK HERE
            </button>
          </div>
        </div>
        {/* Our team */}
        {/* <div className="text-center pt-5"> 
          <h1 className="pb-3">Our team</h1>
          <p>Meet some of our staff</p>
          <div className="row">
            <div className="col-md-3 box">
              <img src={TeamMember} width="100%" />
              <h4>John Doe</h4>
              <p>Designer</p>
            </div>
            <div className="col-md-3 box">
              <img src={TeamMember} width="100%" />
              <h4>John Doe</h4>
              <p>Designer</p>
            </div>
            <div className="col-md-3 box">
              <img src={TeamMember} width="100%" />
              <h4>John Doe</h4>
              <p>Designer</p>
            </div>
          </div>
        </div> */}
        <div className="row pt-5">
          <div 
            className="col-md-12 cta-last text-center text-light p-5"
            style={{ backgroundColor: " rgb(63, 168, 133)", padding: "100px", backgroundImage:'https://psalmon2014.files.wordpress.com/2015/06/istock_000042328596_large.jpg?w=881&h=593' }}
          >
            <h1>Sign up and get a discount</h1>
            <p style={{color: "#fff"}}>
            We are offering a 10% discount now. Get exiting more exciting offers
            </p>
            <button class='btn-white' style={{fontSize: '14px'}}>Get Offers</button>
          </div>
        </div>

        {/* Our testimonials */}
        <div className="pt-5 pb-5">
          <h1 className="text-center pb-5">Our testimonials</h1>
          <div className="row justify-content-center">
            <div className="col-md-5 box">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.{" "}
              <br />
              <img
                src={TeamMember}
                className="rounded-circle mt-3"
                width="70"
                height="70"
              />
              <h4 className="pt-3">John Doe</h4>
              <p className="text-secondary">designer</p>
            </div>
            <div className="col-md-5 box">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              <br />
              <img
                src={TeamMember}
                className="rounded-circle mt-3"
                width="70"
                height="70"
              />
              <h4 className="pt-3">John Doe</h4>
              <p className="text-secondary">designer</p>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="row p-5 misson-row">
          <div className="col-md-3">
            <h1>airi.</h1>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia dese mollit anim id est laborum.
            </p>
            <p className="text-secondary">@2018 airi. All rights reserved.</p>
          </div>
          <div className="col-md-3">
            <h2>Contact us</h2>
            <p>
              Email: office@example.org <br />
              Phone: (+88) 999.888 Address: 25 <br />
              Canal St., New York
            </p>
          </div>
          <div className="col-md-3">
            <h2>Quick links</h2>
            <ul className="list-unstyled">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h2>Follow us</h2>
            <ul className="list-unstyled">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
