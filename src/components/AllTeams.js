import React from 'react'
import axios from 'axios'

class AllTeams extends React.Component {
  constructor() {
    super()

    this.state = { clubs: null }

  }

  componentDidMount(){
    this.getTeams('teams')
  }

  getTeams(endpoint){
    // make an AJAX request to get the data to display
    axios.get(`https://cors-anywhere.herokuapp.com/http://api.football-data.org/v2/competitions/2021/${endpoint}`, { headers: { 'X-Auth-Token': '2e2cceea83ec48c2af5b1eea48220f6a' }})
      .then(res => this.setState({clubs: res.data}))
  }

  render() {
    console.log(this.state.clubs)
    if(!this.state.clubs) return null
    return (
      <main>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {this.state.clubs.teams.map(club =>
                <div className="column is-one-quarter-desktop is-one-third-tablet" key={club.id}>
                  <h1 className="title is-3">{club.name}</h1>
                  <figure className="image">
                    <img src={club.crestUrl} alt={club.name}/>
                  </figure>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default AllTeams
