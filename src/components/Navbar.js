import React from 'react'
import { Link , withRouter} from 'react-router-dom'


class Navbar extends React.Component {

  render() {
    return(
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item"><img src="../images/Logo-New.png"/></Link>
          </div>
          <div className="navbar-start">
            <Link to="/all-teams" className="navbar-item">All Teams</Link>
          </div>
          <div className="navbar-end">
            <Link to="/versus" className="navbar-item">Versus</Link>
          </div>
        </div>
      </nav>
    )
  }

}

export default withRouter(Navbar)
