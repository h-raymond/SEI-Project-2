import React from 'react'
import Select from 'react-select'
import axios from 'axios'
import { options } from '../lib/TeamNames'

class SearchBar extends React.Component{

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

      <Select options={options} />

    /* We need to return the options inside the Select component based on all football club names. */
    /* This can be accessed using {this.state.standings.table.team.id} for the VALUE in the options object & {this.state.standings.table.team.name} for the LABEL */
    )


  }
}

export default SearchBar
