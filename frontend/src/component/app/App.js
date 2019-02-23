import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../setAuthToken';
import { setCurrentUser, logoutUser } from '../../state/login';
import store from '../../store/index';
import './App.css';
import Admin from '../admin'

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Admin/>
      </div>
    );
  }
}

export default App;
