import { Form } from '@unform/web';
import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import Input from '../../components/Input';
import api from '../../services/api';
import Auth from '../../helpers/auth';


interface ILoginData{
  email: string,
  password: string
}

const Login: React.FC = () => {
  const [error, setError] = useState("");
  const history = useHistory();

  async function handleLogin(data: ILoginData ){
    try{

      const response = await api.post('auth',data)
      const userInfo = JSON.stringify(response.data);

      Auth.setToken(userInfo);
      history.push('/')

    }catch(e){
      setError('Invalid login and/or password.')
    }
  }


  return (
    <main>
      <div className="container">
        <Form onSubmit={handleLogin}>
          <Input label="Email: " type="text" name="email"/>
          <Input label="Password: " maxLength={16} type="password" name="password"/>

          {error && (<span style={{color: "red"}}>{error}</span>)}
          <Link to="/forgot">Forgot Password?</Link>
          <button>Log In</button>
          <Link to="/register">Are you new here? <strong>Create an account</strong></Link>
        </Form>
      </div>
    </main>
  );
}

export default Login;