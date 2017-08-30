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
          <div className="about-card">
            <div className="about-body">
              <div className="about-pic">
                <img className="about-IMAGE" src={self} />
              </div>
            </div>
            <div className="about-description">
              <div className="about-text">
                <div className="about-left_header">
                  <span className="about-left-head">
                    <strong>Niccolo </strong> Ortega
                  </span>
                </div>
                <div className="about-left-body">
                  <div className="about-text">
                    <span className="about-text_item">
                      I'm a Full-Stack Developer with a knack for problem
                      solving. Always up for a challenge, I am passionate about
                      working with others to create something great!
                    </span>
                  </div>
                </div>
              </div>
              <div className="about-icon-container">
                <div className="about-icon__card">
                  <svg
                    className="about-icon_item"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                  <span>
                    <strong className="about-strong">CSS</strong>
                  </span>
                </div>
                <div className="about-icon__card">
                  <svg
                    className="about-icon_item"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                  </svg>
                  <span>
                    <strong className="about-strong">HTML5</strong>
                  </span>
                </div>
                <div className="about-icon__card">
                  <svg
                    className="about-icon_item"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                  <span>
                    <strong className="about-strong">JS</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
