import React from 'react';
import Header from './Header';
import CardsList from './CardsList';
import AddTopic from './AddTopic';
import { login, logout, online, getUserData } from './service.js';
import workshops from '../../data/workshop.json';
import '../styles/main.css';

class App extends React.Component {

  state = {
    loggedIn: false,
    avatar: null,
    name: null,
    workshops: workshops,
  }

  componentDidMount() {
    try {
      getUserData()
      .then((data) => {
        this.setState({
          loggedIn: !!data,
          avatar: data.avatar_url,
          name: data.login,
        })
      })
    } catch (err) {
      console.log(err);
    }
  }

  handleLogin = () => {
    login().then( (data) => {
      this.setState({
        loggedIn: true,
        avatar: data.avatar_url,
        name: data.login,
      })
    });
  }

  handleLogout = () => {
    logout();
    this.setState({
      loggedIn: false,
    })
  }

  render() {
    const { loggedIn, avatar, name, workshops } = this.state;
    
    return (
      <div className="wrapper">
        <Header
          loggedIn={ loggedIn }
          login={ this.handleLogin }
          logout={ this.handleLogout }
          name={ name }
          avatar={ avatar }
        />
        <AddTopic />
        <CardsList workshops={ workshops } />
      </div>  
    )
  }  
}

export default App;
