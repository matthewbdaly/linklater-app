import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <form>
        <label>Email <input type="email" required /></label>
        <label>Password <input type="password" required /></label>
        <button>Login</button>
      </form>
    );
  }
}

export default Login;
