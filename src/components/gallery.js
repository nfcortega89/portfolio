import React, { Component } from 'react'
import './gallery.css'
import trendr from '../assets/pictures/trendr.png'
import travelbuddy from '../assets/pictures/travelbuddy.png'
import yummly from '../assets/pictures/yummly.png'

class Gallery extends Component {
  render() {
    return (
      <section className="Gallery">
        <div className="gallery-container">
          <div className="gallery-head">
            <span className="gallery-header">
              <strong>Portfolio</strong>
            </span>
          </div>
          <div className="gallery-body">
            <div className="portfolio-container">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src="" alt="" />
                </div>
                <div className="portfolio-text" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Gallery
