import React, { Component } from "react";
import "./nav.css";
import firebase = require("firebase");

export default class Banner extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let config = {
        apiKey: "AIzaSyCWzG4ckpw89jbVHElXao18xpjodkKHNgE",
        authDomain: "portfolio-e75e0.firebaseapp.com",
        databaseURL: "https://portfolio-e75e0.firebaseio.com",
        projectId: "portfolio-e75e0",
        storageBucket: "portfolio-e75e0.appspot.com",
        messagingSenderId: "98975036488"
      };
      firebase.initializeApp(config);
  render() {
    return (
      <section className="Nav">
        <div className="nav-logo-container">
          <img />
        </div>
        <div className="nav-container">
          <ul className="nav-list">
            <li className="nav-list__items">Home</li>
            <li className="nav-list__items">
              <a href="#services">Services</a>
            </li>
            <li className="nav-list__items">
              <a href="#portfolio">Portofilio</a>
            </li>
            <li className="nav-list__items">
              <a href="#testimonial">Testimonial</a>
            </li>
            <li className="nav-list__items">Contact</li>
          </ul>
        </div>
      </section>
    );
  }
}
