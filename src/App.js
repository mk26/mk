import React, { Component, Fragment } from 'react'
import './App.css'

import Nav from './components/Nav'
import Header from './components/Header'
import Projects from './components/Projects'
import About from './components/About'

import 'react-photoswipe/lib/photoswipe.css'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <div className="content">
          <Header />
          <Projects />
          <About />
        </div>
      </Fragment>
    )
  }
}

export default App
