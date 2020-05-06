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
          <div className="col-md-8 text-light">
            <h1 className="font-weight-bolder">
              Ready to get <br />
              started?
            </h1>
            <p>Sign up to receive the latest news</p>
          </div>
          <div className="col-md-4">
            <img
              src={homeImage}
              className="image-fluid"
              height="500"
              width="500"
              alt="image"
              className="float-right"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 misson-row">
            <h6 className="text-center text-success">OUR MISSION</h6> <br />
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              quis arcu vulputate, ultrices quam sit amet, ullamcorper tellus.
              Nullam eu imperdiet massa. Phasellus in nibh mauris. Phasellus
              magna nisi, varius et nulla ac, ultricies rhoncus neque.{" "}
            </p>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-md-4 text-center">
            <i class="fa fa-mobile fa-4x"></i>
            <h3>Save time</h3>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </p>
          </div>
          <div className="col-md-4 text-center">
            <i class="fa fa-mobile fa-4x"></i>
            <h3>Customization</h3>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </p>
          </div>
          <div className="col-md-4 text-center pb-5">
            <i class="fa fa-mobile fa-4x"></i>
            <h3>Mobile friendly</h3>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

        <div className="row fourth-row justify-content-center">
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
        <div className="text-center pt-5">
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
        </div>
        <div className="row pt-5">
          <div
            className="col-md-12 text-center text-light p-5"
            style={{ backgroundColor: " aquamarine", height: "200px" }}
          >
            <h1>Sign up and get a discount</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus.
            </p>
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
        <div className="row p-5">
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
