import React, { Component } from "react";
import "./nav.css";

export default class Banner extends Component {
  render() {
    return (
      <section className="Nav">
        <div className="nav-logo-container">
          <img />
        </div>
        <div className="nav-container">
          <ul className="nav-list">
            <li className="nav-list__items">Home</li>
            <li className="nav-list__items">
              <a href="#services">Services</a>
            </li>
            <li className="nav-list__items">
              <a href="#portfolio">Portofilio</a>
            </li>
            <li className="nav-list__items">
              <a href="#testimonial">Testimonial</a>
            </li>
            <li className="nav-list__items">Contact</li>
          </ul>
        </div>
      </section>
    );
  }
}
