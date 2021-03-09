import React from "react";

// import { Container } from './styles';

const Forgot: React.FC = () => {
  return (
    <main>
      <div className="container">
        <h1>Forgot</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" />


          <button>Send</button>
        </form>
      </div>
    </main>
  );
};

export default Forgot;
