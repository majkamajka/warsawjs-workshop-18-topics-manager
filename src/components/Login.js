import React from 'react';


class Login extends React.Component {

  render() {
    return (
      <div>
      { !this.props.loggedIn && 
        <div>
          <button onClick={ this.props.login } >Login</button>
        </div>
      }
      { this.props.loggedIn &&
        <div>
          <span className="name">{ this.props.name }</span>
          <img className="avatar" src={this.props.avatar} />
          <button onClick={ this.props.logout} >Log out</button>
        </div>
      }
      </div>
    )
  }  
}

export default Login;
