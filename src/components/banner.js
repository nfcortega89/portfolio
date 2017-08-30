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
              Let's
              <strong className="banner-text_strong"> build </strong>
              <strong className="banner-text_strong"> something </strong>
              <br /> great
              <strong className="banner-text_strong"> together</strong>
            </span>
          </div>
        </div>
      </section>
    )
  }
}
