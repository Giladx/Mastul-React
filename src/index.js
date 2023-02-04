import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'


const App = () => {
  return (
    <Router>
        <Route component={Home} exact path="/" />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
