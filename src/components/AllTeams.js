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
    axios.get(`https://cors-anywhere.herokuapp.com/http://api.football-data.org/v2/competitions/2021/${endpoint}`, {
      headers: { 'X-Auth-Token': '2e2cceea83ec48c2af5b1eea48220f6a' }
    })
      .then(data => {
        //The below is retrieving the team information (i.e. the team name and id) and then deleting that data object from the parent object and returning a new object.
        const teams = data.data.teams.map(data => {
          const { id, name, crestUrl, founded } = data
          //delete data.team
          return { id, name, crestUrl, founded }
        })
        //As `name` is now in the parent object we can sort the teams by name
        teams.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
        this.setState({ clubs: teams })
      })

    //     this.setState({clubs: res.data}))
    // console.log(this.state)
  }

  render() {
    console.log(this.state.clubs)
    if(!this.state.clubs) return null
    return (
      <main>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {this.state.clubs.map(club =>
                <div className="column is-one-quarter-desktop is-one-third-tablet" key={club.id}>
                  <h1 className="title is-3">{club.name}</h1>
                  <figure className="image" style={{ backgroundImage: `url(${club.crestUrl})` }}>
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
