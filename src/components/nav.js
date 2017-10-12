import React, { Component } from "react";
import "./nav.css";
import logo from "../assets/pictures/NFCO_02.png";

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  toggleMenu() {
    const isOpen = this.state.open;
    this.setState({
      open: !isOpen
    });
  }
  render() {
    return (
      <section className="Nav">
        <div className="nav-logo-container">
          <img src={logo} />
        </div>
        <div className="navbar">
          <svg
            onClick={() => this.toggleMenu()}
            className="mobile-menu"
            fill="#000000"
            height="36"
            viewBox="0 0 24 24"
            width="36"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </div>
        <div
          className={this.state.open ? "dropdown open" : "dropdown"}
          onClick={() => {
            this.toggleMenu();
          }}>
          <ul className="nav-list">
            <li className="nav-list__items">
              <a href="#home">Home</a>
            </li>
            <li className="nav-list__items">
              <a href="#about">About</a>
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
