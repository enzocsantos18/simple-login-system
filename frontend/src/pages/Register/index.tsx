import React from 'react';

// import { Container } from './styles';

const Register: React.FC = () => {
  return (
    <main>
      <div className="container">
        <h1>Register</h1>
        <form>
        <label htmlFor="name">Name:</label>
          <input type="text" name="name"/>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email"/>

          <label htmlFor="email">Password:</label>
          <input type="text" name="email"/>

          <button>Confirm</button>
        </form>
      </div>
    </main>
  );
}

export default Register;