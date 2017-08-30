import React, { Component } from 'react'
import Nav from './components/nav'
import About from './components/about'
import Banner from './components/banner'
import Skills from './components/skills'
import Gallery from './components/gallery'
import Footer from './components/footer'
import './App.css'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Banner />
        <About />
        <Skills />
        <Gallery />
        <Footer />
      </div>
    )
  }
}

export default App