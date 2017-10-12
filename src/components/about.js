import React, { Component } from "react";
import "./about.css";
import NO from "../assets/pictures/NO.jpg";

class About extends Component {
  render() {
    return (
      <section className="About">
        <a name="about" />
        <div className="about-container">
          <div className="about-header__container">
            <span className="about-header__text">About Me</span>
          </div>
          <div className="about-body__container">
            <div className="about-image__container">
              <img src={NO} />
            </div>
            <div className="about-right">
              <span className="about-body__text">
                Hi, my name is <strong>Niccolo Ortega </strong> and I'm a
                Full-Stack <strong>Developer</strong> from Los Angeles with a
                knack for solving problems! I'm curious, and I enjoy work that
                challenges me to learn something new and allows me to stretch in
                a different direction. I have working knowledge of HTML5, CSS3
                and Javascript but still strive to learn new skills so that I
                can further my abilities.
              </span>
            </div>
          </div>
          <div className="box-decor" />
        </div>
      </section>
    );
  }
}

export default About;
