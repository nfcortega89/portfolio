import React, { Component } from 'react'
import './banner.css'

export default class Banner extends Component {
  render() {
    return (
      <section className="Banner">
        <div className="banner-container-left" />
        <div className="banner-container-right">
          <div className="banner-text">
            <span className="banner-head">
              <strong>Lets</strong> build <strong>something</strong>
              <br />great <strong>together</strong>
            </span>
            {/* <div className="banner-body">
              <span className="banner__about">
                I'm a Full-Stack Developer based in <strong>#LosAngeles</strong>.
                I make the visual or web and mobile applications as well
                structuring and manipulating data.
              </span>
            </div>
            <button className="banner-btn">Let's Talk</button> */}
          </div>
        </div>
      </section>
    )
  }
}
