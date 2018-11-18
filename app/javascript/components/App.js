import React, { Component } from 'react'
import RestaurantsList from "./RestaurantsList/RestaurantsList";
import Header from "./Header/Header"
import './app.css'

class App extends Component {

  render() {
       let rest = {name:'Oliver', rating:2, address: 'ha ha ha ha ha', ten_bis:true}
    return(
      <div>
          <Header/>
          <div className='rest-list'>
            <RestaurantsList/>
          </div>
      </div>)
  }
}

export default App;
