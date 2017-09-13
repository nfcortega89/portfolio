import React, { Component } from "react";
import "./about.css";
import self from "../assets/canyon.jpg";

export default class About extends Component {
  render() {
    return (
      <section className="About">
        <a name="services" />
        <div className="about-container">
          <div className="about-left_container">
            <div className="services-col">
              <div className="service-header">
                <span className="service-header__text">
                  My <br />
                  Services
                </span>
                <hr />
              </div>
              <div className="service-body">
                <span className="service-body__text">
                  I'm a Full-Stack <strong>Developer</strong> with a knack for
                  problem solving. Always up for a challenge, I am passionate
                  about working with others to create something great!
                </span>
              </div>
            </div>
          </div>
          <div className="about-right__container">
            <div className="about-icon__container">
              <div className="about-icon__card">
                <div className="about-icon__item">
                  <svg
                    fill="#000000"
                    height="48"
                    viewBox="0 0 24 24"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                  </svg>
                </div>
                <span>Web Design</span>
              </div>
              <div className="about-icon__card">
                <div className="about-icon__item">
                  <svg
                    fill="#000000"
                    height="48"
                    viewBox="0 0 24 24"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                </div>
                <span>UI/UX</span>
              </div>
              <div className="about-icon__card">
                <div className="about-icon__item">
                  <svg
                    fill="#000000"
                    height="48"
                    viewBox="0 0 24 24"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" d="M0 0h24v24H0z" fill="none" />
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                  </svg>
                </div>
                <span>Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
