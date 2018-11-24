import React, { Component } from 'react'
import Header from "./Header/Header"
import MainContainer from "./MainContainer/MainContainer";
import Portal from "./Portal";

class App extends Component {

  render() {
    return(
      <div>
          <Header/>
          <MainContainer/>
          <Portal>
              <div>
                  Fucking portal
              </div>
          </Portal>
      </div>
    );
  }
}

export default App;
