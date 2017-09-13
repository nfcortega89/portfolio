import React, { Component } from "react";
import "./banner.css";
import logo from "../assets/pictures/NFCO_01.png";

export default class Banner extends Component {
  render() {
    return (
      <section className="Banner">
        <a name="home" />
        <div className="banner-container">
          <div className="banner-logo">
            <a href="#home">
              <img src={logo} />
            </a>
          </div>
          <div className="banner-header">
            <span className="banner-header__text">Niccolo Ortega</span>
            <br />
            <span className="banner-header__text2">Full-Stack Developer</span>
          </div>
          <div className="tagline">
            <hr />
            <span className="tagline__text">
              Let's build something great together
            </span>
            <hr />
          </div>
          <button className="banner__button">Resume</button>
          <div className="banner-icon-container">
            <svg
              fill="#FFFFFF"
              height="36"
              viewBox="0 0 24 24"
              width="36"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
              <path d="M0-.75h24v24H0z" fill="none" />
            </svg>
          </div>
        </div>
      </section>
    );
  }
}
