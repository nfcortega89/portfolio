import React, { Component } from "react";
import "./nav.css";
import logo from "../assets/pictures/NFCO_02.png";

let smoothScroll = {
  timer: null,

  stop: function() {
    clearTimeout(this.timer);
  },

  scrollTo: function(id, callback) {
    let settings = {
      duration: 1000,
      easing: {
        outQuint: function(x, t, b, c, d) {
          return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        }
      }
    };
    let percentage;
    let startTime;
    let node = document.getElementById(id);
    let nodeTop = node.offsetTop;
    let nodeHeight = node.offsetHeight;
    let body = document.body;
    let html = document.documentElement;
    let height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    let windowHeight = window.innerHeight;
    let offset = window.pageYOffset;
    let delta = nodeTop - offset;
    let bottomScrollableY = height - windowHeight;
    let targetY =
      bottomScrollableY < delta
        ? bottomScrollableY - (height - nodeTop - nodeHeight + offset)
        : delta;

    startTime = Date.now();
    percentage = 0;

    if (this.timer) {
      clearInterval(this.timer);
    }

    function step() {
      let yScroll;
      let elapsed = Date.now() - startTime;

      if (elapsed > settings.duration) {
        clearTimeout(this.timer);
      }

      percentage = elapsed / settings.duration;

      if (percentage > 1) {
        clearTimeout(this.timer);

        if (callback) {
          callback();
        }
      } else {
        yScroll = settings.easing.outQuint(
          0,
          elapsed,
          offset,
          targetY,
          settings.duration
        );
        window.scrollTo(0, yScroll);
        this.timer = setTimeout(step, 10);
      }
    }

    this.timer = setTimeout(step, 10);
  }
};

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleTestimonialClick() {
    smoothScroll.scrollTo("testimonial");
  }
  handleAboutClick() {
    smoothScroll.scrollTo("about");
  }
  handleHomeClick() {
    smoothScroll.scrollTo("home");
  }
  handlePortFolioClick() {
    smoothScroll.scrollTo("portfolio");
  }
  handleContactClick() {
    smoothScroll.scrollTo("contact");
  }
  toggleMenu() {
    const isOpen = this.state.open;
    this.setState({
      open: !isOpen
    });
  }
  render() {
    return (
      <section className="Nav">
        <div className="nav-logo-container">
          <img src={logo} />
        </div>
        <div className="navbar">
          <svg
            onClick={() => this.toggleMenu()}
            className="mobile-menu"
            fill="#000000"
            height="36"
            viewBox="0 0 24 24"
            width="36"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </div>
        <div
          className={this.state.open ? "dropdown open" : "dropdown"}
          onClick={() => {
            this.toggleMenu();
          }}>
          <ul className="nav-list">
            <li className="nav-list__items">
              <a onClick={this.handleHomeClick}>Home</a>
            </li>
            <li className="nav-list__items">
              <a onClick={this.handleAboutClick}>About</a>
            </li>
            <li className="nav-list__items">
              <a onClick={this.handlePortFolioClick}>Portofilio</a>
            </li>
            <li className="nav-list__items">
              <a onClick={this.handleTestimonialClick}>Testimonial</a>
            </li>
            <li className="nav-list__items">
              <a onClick={this.handleContactClick}>Contact</a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
