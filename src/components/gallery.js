import React, { Component } from 'react'
import './gallery.css'
import trendr from '../assets/pictures/trendr.png'
import travelbuddy from '../assets/pictures/travelbuddy.png'
import yummly from '../assets/pictures/yummly.png'

class Gallery extends Component {
  render() {
    return (
      <section className="gallery">
        <div className="gallery-container">
          <div className="head-container">
            <h1 className="head_tag">Portfolio</h1>
          </div>
          <div className="portfolio-container">
            <div className="gallery-card">
              <div className="gallery-card_upper">
                <img src={trendr} className="gallery-card_img" />
              </div>
              <div className="gallery-card_lower">
                <h3 className="gallery-card_tag">Trendr</h3>
                <span className="gallery-card_description">Lorem Ipsum</span>
              </div>
            </div>
            <div className="gallery-card">
              <div className="gallery-card_upper">
                <img src={yummly} className="gallery-card_img" />
              </div>
              <div className="gallery-card_lower">
                <h3 className="gallery-card_tag">Yummly</h3>
                <span className="gallery-card_description">Lorem Ipsum</span>
              </div>
            </div>
            <div className="gallery-card">
              <div className="gallery-card_upper">
                <img src={travelbuddy} className="gallery-card_img" />
              </div>
              <div className="gallery-card_lower">
                <h3 className="gallery-card_tag">TravelBuddy</h3>
                <span className="gallery-card_description">Lorem Ipsum</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Gallery
