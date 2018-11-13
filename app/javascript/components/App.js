import React, { Component } from 'react'
import RestaurantsTable from "./RestaurantsTable";

class App extends Component {

  render() {
    return(
      <div>
        <div> {this.props.title} </div>
        <RestaurantsTable />
      </div>)
  }
}

export default App;
