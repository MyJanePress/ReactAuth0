import React, { Component } from 'react';
import { Auth0LockPasswordless } from 'auth0-lock';

/**
 * To enable the cross domain origin
 * @see https://auth0.com/docs/libraries/lock/v11
 * 
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };
  handleClick(event) {
    event.preventDefault();
    const lock = new Auth0LockPasswordless('Goue3tc4rmQVbBV02ZpodDQp7OzS83dw', 'dev-ul1d4kde.auth0.com', {
      allowedConnections: ['email'],           // Should match the Email connection name, it defaults to 'email'     
      passwordlessMethod: 'code',              // If not specified, defaults to 'code'
      auth: {
        redirectUrl: 'https://www.infosweep.com',
        responseType: 'code'
      }
    });
    lock.show();
  };
  render() { 
    return ( 
      <div className="container">
        <button
          className="btn btn-primary"
          onClick={this.handleClick}
        >
          Login
        </button>
      </div>
     );
  }
}
 
export default App;