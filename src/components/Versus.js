import React from 'react'
import axios from 'axios'
import Select from 'react-select'


class Versus extends React.Component {
  constructor(props){
    super(props)

    this.state = {
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get('http://api.football-data.org/v2/competitions/2021/standings', {
      headers: { 'X-Auth-Token': '2e2cceea83ec48c2af5b1eea48220f6a' }
    })
      .then(data => {
        //The below is retrieving the team information (i.e. the team name and id) and then deleting that data object from the parent object and returning a new object.
        const teams = data.data.standings[0].table.map(data => {
          const team = data.team
          delete data.team
          return { ...team, ...data }
        })
        //As `name` is now in the parent object we can sort the teams by name
        teams.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)

        //returning the values of the `id` and `name` and setting these against the value and label respectively for the purposes of React Select dropdown
        const options = teams.map(team => {
          return { value: team.id, label: team.name }
        })
        this.setState({ options, teams })
      })
  }


  handleChange(teamId, name) {
    const team = this.state.teams.find(team => team.id === teamId)
    this.setState({ [name]: team })
  }

  render(){
    if(!this.state.options) return null
    return(
      <main>
        <section className="section">
          <div className="container">

            {/*  <div className="columns">
              <div className="column is-full">
                {/* Here be search bar (argh )
                <SearchBar/>
              </div>
            </div> */}

            <div className="columns is-multiline">
              <div className="column is-half">
                <Select
                  name="teamA"
                  options={this.state.options}
                  onChange={data => this.handleChange(data.value, 'teamA')}
                />

                {/* Here be search bar (argh )*/}

              </div>

              <div className="column is-half">
                {/* Here be search bar (argh )*/}
                {/*<h1>  {teams[1].label} </h1> */}
                <Select
                  name="teamB"
                  options={this.state.options}
                  onChange={data => this.handleChange(data.value, 'teamB')}
                />
              </div>


            </div>

          </div>
        </section>
        <section className="section">
          <div className="columns">
            {this.state.teamA &&
              <div className="column is-half has-text-centered">
                <h1 className="title is-3 has-text-centered">{this.state.teamA.name}</h1>
                <figure className="image" style={{ backgroundImage: `url(${this.state.teamA.crestUrl})` }}>
                </figure>
                <h2>Position: {this.state.teamA.position}</h2>
                <h2>Points: {this.state.teamA.points} </h2>
                <h2>Games Played: {this.state.teamA.playedGames} </h2>
                <h2>Won: {this.state.teamA.won} </h2>
                <h2>Drawn: {this.state.teamA.draw} </h2>
                <h2>Lost: {this.state.teamA.lost} </h2>
                <h2>Goals for: {this.state.teamA.goalsFor} </h2>
                <h2>Goals against: {this.state.teamA.goalsAgainst} </h2>
                <h2>Goal Difference: {this.state.teamA.goalDifference} </h2>
              </div>
            }
            {this.state.teamB &&
              <div className="column is-half has-text-centered">
                <h1 className="title is-3 has-text-centered">{this.state.teamB.name}</h1>
                <figure className="image" style={{ backgroundImage: `url(${this.state.teamB.crestUrl})` }}>
                </figure>
                <h2>Position: {this.state.teamB.position}</h2>
                <h2>Points: {this.state.teamB.points} </h2>
                <h2>Games Played: {this.state.teamB.playedGames} </h2>
                <h2>Won: {this.state.teamB.won} </h2>
                <h2>Drawn: {this.state.teamB.draw} </h2>
                <h2>Lost: {this.state.teamB.lost} </h2>
                <h2>Goals for: {this.state.teamB.goalsFor} </h2>
                <h2>Goals against: {this.state.teamB.goalsAgainst} </h2>
                <h2>Goal Difference: {this.state.teamB.goalDifference} </h2>
              </div>
            }
          </div>
        </section>
      </main>
    )
  }
}


export default Versus
