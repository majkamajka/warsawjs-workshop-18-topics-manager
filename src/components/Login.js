import React from 'react';


class Login extends React.Component {



  render() {
    return (
      <div>
      { !this.props.loggedIn && 
        <div>
          <button onClick={ this.props.login } >Login</button>
          <button onClick={ this.props.logout } >Logout</button>
        </div>
      }
      { this.props.loggedIn &&
        <div>
          <span className="name">user name</span>
          <span className="img">img</span>
          <button onClick={ this.handleLogin } >Login</button>
        </div>
      }
      </div>
    )
  }  
}

export default Login;
