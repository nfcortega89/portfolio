import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <section className="Footer">
        <div className="footer-container">
          <div className="icon-container">
            <a href="https://www.linkedin.com/in/niccolo-ortega-1b17bbb7/">
              <i className="fa fa-linkedin fa-2x" aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/nikkotoonaughty">
              <i className="fa fa-instagram fa-2x" aria-hidden="true" />
            </a>
            <a href="https://www.facebook.com/NikkosWacko">
              <i className="fa fa-facebook fa-2x" aria-hidden="true" />
            </a>
            <a href="https://www.pinterest.com/niccoloortega">
              <i className="fa fa-pinterest-p fa-2x" aria-hidden="true" />
            </a>
            <a href="https://github.com/nfcortega89">
              <i className="fa fa-github fa-2x" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    );
  }
}
