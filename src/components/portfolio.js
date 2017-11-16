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
  render() {
    return (
      <section id="portfolio" className="Portfolio">
        <div className="portfolio-container">
          <div className="portfolio-header">
            <span className="portfolio-header__text">
              <a name="portfolio">Portfolio</a>
            </span>
          </div>
          <div className="portfolio-body">
            <div className="work-wrapper">
              <h3>Who's Hungry</h3>
              <p>
                Who's Hungry is a food app designed to promote healthy eating.
                For those who are tired of eating the same bland food, it's time
                to spice things up and concoct delicious yet healthy meals.
                Powered by Yummly
              </p>
              <span>Stack: JQuery, Express, Unirest, Node, Nodemon</span>
              <span>
                Repo:{" "}
                <a
                  target="_blank"
                  href="https://github.com/nfcortega89/capstone2">
                  https://github.com/nfcortega89/yummly
                </a>
              </span>
              <span>
                Url:{" "}
                <a
                  target="_blank"
                  href="https://limitless-mountain-11507.herokuapp.com/">
                  https://limitless-mountain-11507.herokuapp.com/
                </a>
              </span>
            </div>
            <div className="work-wrapper">
              <h3>Trendr</h3>
              <p>
                Trendr is a gallery page that showcases trending images from
                carefully curated photos. Images are organized into categories
                where viewers can vote on them. The photo with the most up votes
                is displayed on the home page, and automatically changes based
                on the trending pictures.
              </p>
              <span>
                Stack: React, Express , Node, Mongodb, Mongoose, Firebase Auth,
                Nodemon
              </span>
              <span>
                Repo:{" "}
                <a target="_blank" href="https://github.com/nfcortega89/trendr">
                  https://github.com/nfcortega89/trendr
                </a>
                <br />
                <a
                  target="_blank"
                  href="https://github.com/nfcortega89/trendr-client">
                  https://github.com/nfcortega89/trendr-client
                </a>
              </span>
              <span>
                Url:{" "}
                <a target="_blank" href="https://trendr-3eddc.firebaseapp.com">
                  https://trendr-3eddc.firebaseapp.com
                </a>
              </span>
            </div>
            <div className="work-wrapper">
              <h3>Airtime</h3>
              <p>
                Airtime is a powerful app made to help the user check weather
                conditions to make flying drones easier. With Airtime the user
                is given a variety of legal fly-zones in San Diego along with
                the current weather conditions, wind speed, and humidity.
              </p>
              <span>Stack: React, Nodemon, Node</span>
              <span>
                Repo:{" "}
                <a
                  target="_blank"
                  href="https://github.com/nfcortega89/airtime">
                  https://github.com/nfcortega89/airtime
                </a>
              </span>
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
      </section>
    );
  }
}

export default Portfolio;
