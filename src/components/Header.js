import React from 'react';
import Login from './Login';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 className="header__heading">Topics manager</h1>
        <Login loggedIn={ this.props.loggedIn } login={ this.props.login } logout={ this.props.logout } />
      </div>
    )
  }  
}

export default Header;
