import { Form } from '@unform/web';
import React, {useState, useContext} from 'react';
// import { Container } from './styles';
import {Link} from 'react-router-dom';
import Input from '../../components/Input';
import { UserContext } from '../../providers/UserProvider';
import api from '../../services/api';

interface ILoginData{
  email: string,
  password: string
}

const Login: React.FC = () => {
  const {handleLogin} = React.useContext(UserContext);
  const [error, setError] = useState("");


  async function handleSubmit(data: ILoginData ){
    try{

      const response = await api.post('auth',data)
      const userInfo = response.data;

      handleLogin(userInfo);

    }catch(e){
      setError('Invalid login and/or password.')
    }
  }


  return (
    <main>
      <div className="container">
        <Form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <Input type="text" name="email"/>

          <label htmlFor="password">Password:</label>
          <Input type="password" name="password"/>

          {error && (<span style={{color: "red"}}>{error}</span>)}
          <Link to="/forgot"> Forgot Password?</Link>
          <button>Log In</button>
          <Link to="/register"> Are you new here? <strong>Create an account</strong></Link>
        </Form>
      </div>
    </main>
  );
}

export default Login;