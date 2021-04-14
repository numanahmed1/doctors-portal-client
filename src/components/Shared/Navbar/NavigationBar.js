import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <Navbar className="main-nav" expand="lg">
      <Navbar.Toggle aria-controls="collapsable-nav" />
      <Navbar.Collapse id="collapsable-nav">
        <Nav className="ml-auto">
          <li className="nav-item">
            <Link className="nav-link mr-5" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5" to="/services">
              Dental Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5 mr-5 desk-text-color" to="/reviews">
              Reviews
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5 desk-text-color" to="/blog">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5 desk-text-color" to="/contact-us">
              Contact Us
            </Link>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
