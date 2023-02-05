import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import About from './views/about'
import Contact from './views/contact'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={About} exact path="/about" />
        <Route component={Contact} exact path="/contact" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
