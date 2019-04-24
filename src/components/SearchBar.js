import React from 'react'
import Select from 'react-select'
import axios from 'axios'

class SearchBar extends React.Component{

  constructor(props){
    super()
    this.state = {
      options: [],
      selectedOption: '',
      clearable: true
    }

    this.handleSelect = this.handleSelect.bind(this)
  }

  componentDidMount() {
    axios.get('http://api.football-data.org/v2/competitions/2021/standings', { headers:
      {
        'X-Auth-Token': '2e2cceea83ec48c2af5b1eea48220f6a'
      }
    }
    )
      .then(data => {
        console.log(data.data.standings[0].table)
        const options = data.data.standings[0].table.map(team => {
          return { value: team.team.id, label: team.team.name }
        })
        this.setState({ options })
      })
  }
  handleSelect(e) {
    console.log(e)
    const teams = (e.map(select => select.value))
    this.setState({ teams })
  }

  render(){
    return(
      <Select
        isMulti
        name="teams"
        label="teams"
        options={this.state.options}
        onChange={this.handleSelect}
      />




    )


  }
}

export default SearchBar
