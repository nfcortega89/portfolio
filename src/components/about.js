import React, { Component } from 'react'
import './about.css'
import self from '../assets/canyon.jpg'

export default class About extends Component {
  render() {
    return (
      <section className="About">
        <div className="about-head">
          <span className="about-header">
            About <strong className="about-header_strong">Me</strong>
          </span>
        </div>
        <div className="about-container">
          <div className="about-body container">
            <div className="about-card">
              <div className="about-body">
                <div className="self-cont">
                  <img className="about-IMAGE" src={self} />
                </div>
              </div>
              <div className="about-left-middle">
                <div className="about-left-text">
                  <span className="about-left-head">
                    Franco <strong> Ortega</strong>
                  </span>
                  <span className="about-text">
                    I'm a Full-Stack Developer with a knack for problem solving.
                    Always up for a challenge, I am passionate about working
                    with others to create something great!
                  </span>
                </div>
              </div>
              <div className="about-body-right">
                <div className="skills_container">
                  <div className="skill-icon_card">
                    <svg
                      fill="#000000"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                    </svg>
                  </div>
                  <div className="skill-icon_card">
                    <svg
                      fill="#000000"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path clip-rule="evenodd" d="M0 0h24v24H0z" fill="none" />
                      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                    </svg>
                  </div>
                  <div className="skill-icon_card">
                    <svg
                      fill="#000000"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
