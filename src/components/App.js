import React from 'react';
import Header from './Header';
import CardsList from './CardsList';
import AddTopic from './AddTopic';
import { login, logout } from './service.js';
import '../styles/main.css';

class App extends React.Component {

  state = {
    loggedIn: false,
    avatar: null,
    name: null,
  }

  handleLogin = () => {
    login().then( (data) => {
      
    });
    
  }

  handleLogout = () => {
    logout();
  }

  render() {
    return (
      <div className="wrapper">
        <Header loggedIn={ this.state.loggedIn } login={ this.handleLogin } logout={ this.handleLogout } />
        <AddTopic />
        <CardsList />
      </div>  
    )
  }  
}

export default App;
