import React, {useContext} from 'react';
import { toast } from 'react-toastify';
import Auth from '../../helpers/auth';
import api from '../../services/api'
import { Container } from './styles';
import {UserContext} from '../../contexts/UserProvider'; 
const EmailConfirmation: React.FC = () => {

  const {setUserInfo} = useContext(UserContext)

  async function handleEmail(){
    try{
      await api.post('users/sendConfirmation',{}, {
        headers: {
          'Authorization': `Bearer ${Auth.getToken()}` 
        }
      })

      toast.success("Email send, check your email inbox to confirm");

    }
    catch(e){
      toast.error("Email not send, try again later...");

    }

  }

  return (
    <Container>
      <h3>Please Confirm your email</h3>
      <p>Your email is not confirmed, click in the button bellow and check your email 😃</p>
      <button onClick={() => handleEmail()}>Send email</button>
    </Container>
  );
}

export default EmailConfirmation;