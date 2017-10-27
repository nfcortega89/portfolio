import React, { Component } from "react";
import "./testimonial.css";
import Arthur from "../assets/pictures/arthur.png";

export default class Testimonials extends Component {
  render() {
    return (
      <section className="Testimonial">
        <a id="testimonial" name="testimonial" />
        <div className="testimonial-container">
          <div className="testimonial-header__container">
            <span className="testimonial-header__text">Testimonial</span>
          </div>
          <div className="testimonial-body__container">
            <span className="testimonial-body__text">
              Nikko is an ambitious, driven and excellent problem solver. As his
              mentor, he has been an absolute pleasure to work with as he
              constantly strives to achieve his goals creatively while using
              best practices. His ability to work through difficult problems is
              impressive and never gives up. I highly recommend Nikko as a
              full-stack developer!
              <hr />
            </span>
          </div>
          <div className="testimonial-image__container">
            <img src={Arthur} />
          </div>
          <div className="testimonial-name__container">
            <span className="testimonial-name__text">Arthur Longbottom</span>
          </div>
        </div>
      </section>
    );
  }
}
