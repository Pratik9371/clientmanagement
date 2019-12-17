import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
        <a className="navbar-brand" href="#">
          CMS
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">
                <a className="nav-link" href="#">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about">
                <a className="nav-link" href="#">
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/viewclients">
                <a className="nav-link" href="#">
                  View Clients
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
