import React, { Component } from "react";
import "./portfolio.css";
import Airtime from "../assets/pictures/Airtime2.png";
import Traveler from "../assets/pictures/TC2.png";
import Yummly from "../assets/pictures/Yummly2.png";
import Trendr from "../assets/pictures/Trendr2.png";
import firebase from "firebase";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openTrendr: true,
      openYummly: true,
      openAirtime: true,
      openTraveler: true,
      showTrendrImage: false,
      showYummlyImage: false,
      showTravelerImage: false,
      showAirtimeImage: false
    };
    this.toggleTrendrMenu = this.toggleTrendrMenu.bind(this);
    this.toggleYummlyMenu = this.toggleYummlyMenu.bind(this);
    this.toggleAirtimeMenu = this.toggleAirtimeMenu.bind(this);
    this.toggleTravlerMenu = this.toggleTravlerMenu.bind(this);
    this.toggleTrendrInfo = this.toggleTrendrInfo.bind(this);
    this.toggleYummlyInfo = this.toggleYummlyInfo.bind(this);
    this.toggleTravelerInfo = this.toggleTravelerInfo.bind(this);
    this.toggleAirtimeInfo = this.toggleAirtimeInfo.bind(this);
  }
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyCWzG4ckpw89jbVHElXao18xpjodkKHNgE",
      authDomain: "portfolio-e75e0.firebaseapp.com",
      databaseURL: "https://portfolio-e75e0.firebaseio.com",
      projectId: "portfolio-e75e0",
      storageBucket: "portfolio-e75e0.appspot.com",
      messagingSenderId: "98975036488"
    };
    firebase.initializeApp(config);
  }
  toggleTrendrMenu() {
    const trendrOpen = this.state.openTrendr;
    this.setState({
      openTrendr: !trendrOpen
    });
  }
  toggleYummlyMenu() {
    const yummlyOpen = this.state.openYummly;
    this.setState({
      openYummly: !yummlyOpen
    });
  }
  toggleAirtimeMenu() {
    const airtimeOpen = this.state.openAirtime;
    this.setState({
      openAirtime: !airtimeOpen
    });
  }
  toggleTravlerMenu() {
    const travelerOpen = this.state.openTraveler;
    this.setState({
      openTraveler: !travelerOpen
    });
  }
  toggleTrendrInfo() {
    const isShowing = this.state.showTrendrImage;
    this.setState({
      showTrendrImage: !isShowing
    });
  }
  toggleYummlyInfo() {
    const isShowing = this.state.showYummlyImage;
    this.setState({
      showYummlyImage: !isShowing
    });
  }
  toggleTravelerInfo() {
    const isShowing = this.state.showTravelerImage;
    this.setState({
      showTravelerImage: !isShowing
    });
  }
  toggleAirtimeInfo() {
    const isShowing = this.state.showAirtimeImage;
    this.setState({
      showAirtimeImage: !isShowing
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
              <div
                onClick={() => this.toggleTrendrMenu()}
                className="trendr-wrapper">
                <div
                  className={
                    this.state.openTrendr
                      ? "trendr-image-container"
                      : "trendr-image-container hide"
                  }>
                  <img src={Trendr} className="trendr" />
                </div>

                <div
                  onClick={() => this.toggleTrendrInfo()}
                  className={
                    this.state.showTrendrImage
                      ? "trendr-info "
                      : "trendr-info hide"
                  }>
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
                      Repo:{" "}
                      <a
                        target="_blank"
                        href="https://github.com/nfcortega89/trendr">
                        https://github.com/nfcortega89/trendr
                      </a>
                      <br />
                      <a
                        target="_blank"
                        href="https://github.com/nfcortega89/trendr-client">
                        https://github.com/nfcortega89/trendr-client
                      </a>
                      <br />
                    </span>
                    <br />
                    <br />
                    <span>
                      Url:{" "}
                      <a
                        target="_blank"
                        href="https://trendr-3eddc.firebaseapp.com">
                        https://trendr-3eddc.firebaseapp.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div
                onClick={() => this.toggleYummlyMenu()}
                className="yummly-wrapper">
                <div
                  className={
                    this.state.openYummly
                      ? "yummly-image-container"
                      : "yummly-image-container hide"
                  }>
                  <img src={Yummly} className="yummly" />
                </div>
                <div
                  onClick={() => this.toggleYummlyInfo()}
                  className={
                    this.state.showYummlyImage
                      ? "yummly-info "
                      : "yummly-info hide"
                  }>
                  <div classname="yummly-info-header">
                    <span className="yummly-header__text">
                      <strong>Who's Hungry</strong>
                    </span>
                  </div>
                  <hr />
                  <div className="yummly-info-body">
                    <p>
                      Who's Hungry is a food app designed to promote healthy
                      eating. For those who are tired of eating the same bland
                      food, it's time to spice things up and concoct delicious
                      yet healthy meals. Powered by Yummly
                    </p>
                    <span>Stack: JQuery, Express, Unirest, Node, Nodemon</span>
                    <br />
                    <br />
                    <span>
                      Repo:{" "}
                      <a
                        target="_blank"
                        href="https://github.com/nfcortega89/capstone2">
                        https://github.com/nfcortega89/yummly
                      </a>
                      <br />
                    </span>
                    <br />
                    <span>
                      Url:{" "}
                      <a
                        target="_blank"
                        href="https://limitless-mountain-11507.herokuapp.com/">
                        https://limitless-mountain-11507.herokuapp.com/
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio right-col col">
              <div
                onClick={() => this.toggleTravlerMenu()}
                className="traveler-wrapper">
                <div
                  className={
                    this.state.openTraveler
                      ? "traveler-image-container"
                      : "traveler-image-container hide"
                  }>
                  <img src={Traveler} className="traveler" />
                </div>
                <div
                  onClick={() => this.toggleTravelerInfo()}
                  className={
                    this.state.showTravelerImage
                      ? "traveler-info "
                      : "traveler-info hide"
                  }>
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
                    <br />
                    <span>
                      Repo:{" "}
                      <a
                        target="_blank"
                        href="https://github.com/nfcortega89/CS1">
                        https://github.com/nfcortega89/CS1
                      </a>
                      <br />
                    </span>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <div
                onClick={() => this.toggleAirtimeMenu()}
                className="airtime-wrapper">
                <div
                  className={
                    this.state.openAirtime
                      ? "airtime-image-container"
                      : "airtime-image-container hide"
                  }>
                  <img src={Airtime} className="airtime" />
                </div>
                <div
                  onClick={() => this.toggleAirtimeInfo()}
                  className={
                    this.state.showAirtimeImage
                      ? "airtime-info "
                      : "airtime-info hide"
                  }>
                  <div classname="airtime-info-header">
                    <span className="airtime-header__text">
                      <strong>Airtime</strong>
                    </span>
                  </div>
                  <hr />
                  <div className="airtime-info-body">
                    <p>
                      Airtime is a powerful app made to help the user check
                      weather conditions to make flying drones easier. With
                      Airtime the user is given a variety of legal fly-zones in
                      San Diego along with the current weather conditions, wind
                      speed, and humidity.
                    </p>
                    <span>Stack: React, Nodemon, Node</span>
                    <br />
                    <br />
                    <span>
                      Repo:{" "}
                      <a
                        target="_blank"
                        href="https://github.com/nfcortega89/airtime">
                        https://github.com/nfcortega89/airtime
                      </a>
                      <br />
                    </span>
                    <br />
                    <span>
                      Url:{" "}
                      <a
                        target="_blank"
                        href="https://advocate-bear-76680.netlify.com/">
                        https://advocate-bear-76680.netlify.com/
                      </a>
                    </span>
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
