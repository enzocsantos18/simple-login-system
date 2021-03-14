import React, {useContext} from 'react';
import { useHistory } from 'react-router';
import EmailConfirmation from '../../components/EmailConfirmation';
import Header from '../../components/Header';
import { UserContext } from '../../contexts/UserProvider';
import Auth from '../../helpers/auth';


const Dashboard: React.FC = () => {
  const history = useHistory();
 
  const {user} = useContext(UserContext);

  return (
 
    <>
    <Header/>
    {!user.isConfirmed && <EmailConfirmation/>} 
    </>
    
  );
};

export default Dashboard;