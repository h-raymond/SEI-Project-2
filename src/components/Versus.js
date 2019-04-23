import React from 'react'
import Select from 'react-select'
import axios from 'axios'

import SearchBar from './components/SearchBar'


class Versus extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      clubs: null
    }
  }

  componentDidMount() {
    axios.get('http://api.football-data.org/v2/competitions/2021/standings', { headers:
      {
        'X-Auth-Token': '2e2cceea83ec48c2af5b1eea48220f6a'
      }
    }
    )
      .then(res => this.setState({ clubs: res.data }))
  }
  render(){
    return(
      <main>
        <section className="section">
          <div className="container">

            <div className="columns">
              <div className="column is-full">
                {/* Here be search bar (argh )*/}
                <Select options={options} />
              </div>
            </div>

            <div className="columns is-multiline">
              <div className="column is-half">
                {/* Here be search bar (argh )*/}
                first column
              </div>

              <div className="column is-half">
                {/* Here be search bar (argh )*/}
                second column
              </div>

            </div>

          </div>
        </section>
      </main>
    )
  }
}


export default Versus
