import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './style.scss'
import { HashRouter, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'


class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <main>
          <Navbar />
          <h1>Hello World!</h1>
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
