import React from 'react'

class AllTeams extends React.Component {
  constructor() {
    super()

    this.state = { clubs: [] }

  }

  componentDidMount(){
    this.getTeams('teams')
  }

  getTeams(endpoint){
    const myHeaders = new Headers({
      'Content-Type': 'application/json',
      'X-Auth-Token': '2e2cceea83ec48c2af5b1eea48220f6a'
    })
    // make an AJAX request to get the data to display
    fetch(`https://cors-anywhere.herokuapp.com/http://api.football-data.org/v2/competitions/2021/${endpoint}`, {
      method: 'GET',
      headers: myHeaders
    })
      .then(res => res.json())
      // update state with the data
      // this will re-render the component
      .then(data => this.setState({clubs: data}))
  }

  render() {
    console.log(this.state.clubs)
    if(this.state.clubs.length === 0) return null
    // console.log(this.state.clubs.teams, 'i am this.state.clubs.teams')
    return (
      //<body>
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
    //  </body>
    )
  }
}

export default AllTeams
