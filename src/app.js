import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './style.scss'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'
import AllTeams from './components/AllTeams'
import Versus from './components/Versus'


class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar />
          <Route path="/versus" component={Versus} />
          <Route path="/all-teams" component={AllTeams} />
          <Route exact path="/" component={Home} />
        </main>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
