import React, { Component } from "react";
import "./nav.css";
import logo from "../assets/pictures/NFCO_01.png";

export default class Banner extends Component {
  render() {
    return (
      <section className="Nav">
        <div className="nav-logo-container">
          <img src={logo} />
        </div>
        <div className="nav-container">
          <ul className="nav-list">
            <li className="nav-list__items">
              <a href="#home">Home</a>
            </li>
            <li className="nav-list__items">
              <a href="#services">Services</a>
            </li>
            <li className="nav-list__items">
              <a href="#portfolio">Portofilio</a>
            </li>
            <li className="nav-list__items">
              <a href="#testimonial">Testimonial</a>
            </li>
            <li className="nav-list__items">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
