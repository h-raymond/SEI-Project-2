import React from 'react'
import Select from 'react-select'
import axios from 'axios'

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
    
  )
}

}

export default SearchBar
