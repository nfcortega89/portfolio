import React, { Component } from "react";
import "./portfolio.css";
import Airtime from "../assets/pictures/Airtime2.png";
import Traveler from "../assets/pictures/TC2.png";
import Yummly from "../assets/pictures/Yummly2.png";
import Trendr from "../assets/pictures/Trendr2.png";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  toggleMenu() {
    const isOpen = this.state.open;
    this.setState({
      open: !isOpen
    });
  }
  render() {
    return (
      <section className="Portfolio">
        <div className="portfolio-container">
          <div className="portfolio-header">
            <span className="portfolio-header__text">
              <a name="portfolio">Portfolio</a>
            </span>
          </div>
          <div className="portfolio-body">
            <div className="portfolio left-col col ">
              <div onClick={() => this.toggleMenu()} className="trendr-wrapper">
                <div
                  className={
                    this.state.open ? (
                      "trendr-image-container"
                    ) : (
                      "trendr-image-container hide"
                    )
                  }>
                  <img src={Trendr} className="trendr" />
                </div>

                <div className="trendr-info">
                  <div classname="trendr-info-header">
                    <span className="trendr-header__text">
                      <strong>Trendr</strong>
                    </span>
                  </div>
                  <hr />
                  <div className="trendr-info-body">
                    <p>
                      Trendr is a gallery page that showcases trending images
                      from carefully curated photos. Images are organized into
                      categories where viewers can vote on them. The photo with
                      the most up votes is displayed on the home page, and
                      automatically changes based on the trending pictures.
                    </p>
                    <span>
                      Stack: React, Express , Node, Mongodb, Mongoose, Firebase
                      Auth, Nodemon
                    </span>
                    <br />
                    <br />
                    <span>
                      Repo: https://github.com/nfcortega89/trendr
                      <br />
                      https://github.com/nfcortega89/trendr-client
                      <br />
                    </span>
                    <br />
                    <br />
                    <span>Url: https://trendr-3eddc.firebaseapp.com</span>
                  </div>
                </div>
              </div>
              <div onClick={() => this.toggleMenu()} className="yummly-wrapper">
                <div
                  className={
                    this.state.open ? (
                      "yummly-image-container"
                    ) : (
                      "yummly-image-container hide"
                    )
                  }>
                  <img src={Yummly} className="yummly" />
                </div>
                <div className="yummly-info">
                  <div classname="yummly-info-header">
                    <span className="yummly-header__text">
                      <strong>Yummly</strong>
                    </span>
                  </div>
                  <hr />
                  <div className="yummly-info-body">
                    <p>
                      Yummly is a food app designed to promote healthy eating.
                      For those who are tired of eating the same bland food,
                      it's time to spice things up and concoct delicious yet
                      healthy meals. Powered by Yummly
                    </p>
                    <span>Stack: JQuery, Express, Unirest, Node, Nodemon</span>
                    <br />
                    <span>
                      Repo: https://github.com/nfcortega89/yummly
                      <br />
                    </span>
                    <br />
                    <br />
                    <span>
                      Url: https://limitless-mountain-11507.herokuapp.com/
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio right-col col">
              <div
                onClick={() => this.toggleMenu()}
                className="traveler-wrapper">
                <div
                  className={
                    this.state.open ? (
                      "traveler-image-container"
                    ) : (
                      "traveler-image-container hide"
                    )
                  }>
                  <img src={Traveler} className="traveler" />
                </div>
                <div className="traveler-info">
                  <div classname="traveler-info-header">
                    <span className="traveler-header__text">
                      <strong>Travelers Companion</strong>
                    </span>
                  </div>
                  <hr />
                  <div className="traveler-info-body">
                    <p>
                      Powered by Expedia, Travelers Companion was created to
                      help users search for the cheapest flights.
                    </p>
                    <span>Stack: JQuery</span>
                    <br />
                    <span>
                      Repo: https://github.com/nfcortega89/CS1
                      <br />
                    </span>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <div
                onClick={() => this.toggleMenu()}
                className="airtime-wrapper">
                <div
                  className={
                    this.state.open ? (
                      "airtime-image-container"
                    ) : (
                      "airtime-image-container hide"
                    )
                  }>
                  <img src={Airtime} className="airtime" />
                </div>
                <div className="airtime-info">
                  <div classname="airtime-info-header">
                    <span className="airtime-header__text">
                      <strong>Airtime</strong>
                    </span>
                  </div>
                  <hr />
                  <div className="airtime-info-body">
                    <p>
                      Airtime is a powerful app made to help check weather
                      conditions to make fly drones easier. With Airtime the
                      user can is shown legal fly-zones in San Diego along with
                      the current weather conditions, wind speed, and humidity.
                    </p>
                    <span>Stack: React, Nodemon, Node</span>
                    <br />
                    <span>
                      Repo: https://github.com/nfcortega89/airtime
                      <br />
                    </span>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
