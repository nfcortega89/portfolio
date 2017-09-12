import React, { Component } from "react";
import "./testimonial.css";

export default class Testimonials extends Component {
  render() {
    return (
      <section className="Testimonial">
        <a name="testimonial" />
        <div className="testimonial-container">
          <div className="testimonial-header__container">
            <span className="testimonial-header__text">Testimonial</span>
            <hr />
          </div>
          <div className="testimonial-body__container">
            <span className="testimonial-body__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <hr />
            </span>
          </div>
        </div>
        <div className="quotes">
          <span>''</span>
        </div>
      </section>
    );
  }
}
