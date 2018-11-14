import React, { Component } from 'react'
import RestaurantsTable from "./Table/RestaurantsTable";
import Header from "./Header/Header"

class App extends Component {

  render() {
    return(
      <div>
        <Header/>
        <RestaurantsTable />
      </div>)
  }
}

export default App;
