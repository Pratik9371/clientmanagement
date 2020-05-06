import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-md bg-light navbar-light fixed-top p-3">
        {/* Brand Name   */}
        <a className="navbar-brand" href="#">
          <h1 className="font-weight-light">Shipperspoint</h1>
        </a>
        {/* Collapase Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li>
              <NavLink
                exact
                to="/"
                className="nav-links"
                activeClassName="nav-links-active"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/about us"
                className="nav-links"
                activeClassName="nav-links-active"
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/blog"
                className="nav-links"
                activeClassName="nav-links-active"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/contact"
                className="nav-links"
                activeClassName="nav-links-active"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
