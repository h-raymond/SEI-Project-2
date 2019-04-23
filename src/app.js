import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './style.scss'
import { HashRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'
import AllTeams from './components/AllTeams'


class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <main>
          <Navbar />
          <Route path="/AllTeams" component={AllTeams} />
          <Route path="/" component={Home} />
        </main>
      </HashRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
