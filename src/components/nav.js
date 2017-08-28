import React, { Component } from 'react'
import './nav.css'
import headshot from '../assets/pictures/logo-headshot.png'

class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo-wrapper">
          <div className="logo-headshot">
            <img src={headshot} alt="Nikko Ortega" />
          </div>
          <div className="logo-text">
            <span className="logo-text-top">
              Nikko <strong>Ortega</strong>
            </span>
            <span className="logo-text-bottom">
              <strong>Full-Stack</strong> Developer
            </span>
          </div>
        </div>
        <ul className="navbar-list">
          <li className="navbar-list_item">
            <a>Home</a>
          </li>
          <li className="navbar-list_item">
            <a>About</a>
          </li>
          <li className="navbar-list_item">
            <a>Contact</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav
