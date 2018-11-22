import React, { Component } from 'react'
import Header from "./Header/Header"
import MainContainer from "./MainContainer/MainContainer";

class App extends Component {

  render() {
    return(
      <div>
          <Header/>
          <MainContainer/>
      </div>
    );
  }
}

export default App;
