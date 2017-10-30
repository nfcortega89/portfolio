import React, { Component } from "react";
import "./banner.css";
import logo from "../assets/pictures/NFCO_02.png";
import Resume from "../assets/NIKKORESUME1.pdf";

export default class Banner extends Component {
  render() {
    return (
      <section className="Banner">
        <a id="home" name="home" />
        <div className="banner-container">
          <div className="banner-logo">
            <img src={logo} />
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
          <button className="banner__button">
            <a href={Resume} download>
              Resume
            </a>
          </button>
        </div>
      </section>
    );
  }
}
