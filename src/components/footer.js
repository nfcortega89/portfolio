import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="footer-container">
          <div className="legal-container">
            <span className="footer-legal">
              Copyright © 2017 Niccolo Ortega. All rights reserved.
            </span>
          </div>
          <div className="icon-container">
            <a href="https://www.linkedin.com/in/niccolo-ortega-1b17bbb7/">
              <i className="fa fa-linkedin" aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/nikkotoonaughty">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
            <a href="https://www.facebook.com/NikkosWacko">
              <i className="fa fa-facebook" aria-hidden="true" />
            </a>
            <a href="https://www.pinterest.com/niccoloortega/">
              <i className="fa fa-pinterest-p" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    )
  }
}
