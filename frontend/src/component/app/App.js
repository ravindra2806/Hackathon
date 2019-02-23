import React, { Component } from 'react';
import './App.css';
import Admin from '../admin'
import ChatComponent from '../ChatComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Admin/>
        <ChatComponent />
      </div>
    );
  }
}

export default App;
