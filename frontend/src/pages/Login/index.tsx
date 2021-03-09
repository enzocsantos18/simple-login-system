import React from 'react';
// import { Container } from './styles';
import {Link} from 'react-router-dom';
const Login: React.FC = () => {
  return (
    <main>
      <div className="container">
        <form>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email"/>

          <label htmlFor="email">Password:</label>
          <input type="text" name="email"/>
          <Link to="/forgot"> Forgot Password?</Link>

          <button>Log In</button>
          <Link to="/register"> Are you new here? <strong>Create an account</strong></Link>
        </form>
      </div>
    </main>
  );
}

export default Login;