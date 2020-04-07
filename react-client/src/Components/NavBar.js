import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <i class="fa fa-cut pr-1"></i> CMS
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapse-button"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="collapse-button" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li>
              <NavLink
                exact
                to="/welcome"
                className="nav-links"
                activeClassName="nav-links-active"
              >
                <i class="fa fa-home pr-1"></i>Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/contact"
                className="nav-links"
                activeClassName="nav-links-active"
              >
                <i class="fa fa-id-badge pr-1"></i>Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/viewclients"
                className="nav-links"
                activeClassName="nav-links-active"
              >
                <i class="fa fa-user pr-1"></i>View Clients
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/ordersform"
                className="nav-links"
                activeClassName="nav-links-active"
              >
                <i class="fa fa-plus pr-1"></i>Add Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/services"
                className="nav-links"
                activeClassName="nav-links-active"
              >
                <i class="fa fa-street-view pr-1"></i>Services
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/">
                <button
                  type="button"
                  className="btn text-secondary"
                  style={{ backgroundColor: "rgb(240, 197, 204)" }}
                >
                  Sign Out
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
