import React from 'react';
import Login from './Login';

class Header extends React.Component {
  render() {
    const { loggedIn, login, logout, name, avatar } = this.props;
    return (
      <div className="header">
        <h1 className="header__heading">Topics manager</h1>
        <Login
          loggedIn={ loggedIn }
          login={ login }
          logout={ logout }
          name={ name }
          avatar={ avatar }
        />
      </div>
    )
  }  
}

export default Header;
