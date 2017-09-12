import React, { Component } from "react";
import "./portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <section className="Portfolio">
        <div className="portfolio-container">
          <div className="portfolio-header">
            <span className="portfolio-header__text">
              <a name="portfolio">Portfolio</a>
            </span>
          </div>
          <div className="portfolio-top">
            <div className="portolio-top__left" />
          </div>
          <div className="portfolio-top__right" />
          <div className="portfolio-bottom">
            <div className="portfolio-bottom__left" />
          </div>
          <div className="portfolio-bottom__right" />
        </div>
      </section>
    );
  }
}

export default Portfolio;
