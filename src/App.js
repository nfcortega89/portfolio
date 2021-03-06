import React, { Component } from "react";
import Nav from "./components/nav";
import Banner from "./components/banner";
import About from "./components/about";
import Testimonial from "./components/testimonial";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Banner />
        <About />
        <Portfolio />
        <Testimonial />
        <Footer />
      </div>
    );
  }
}

export default App;
