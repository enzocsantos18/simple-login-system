import React from 'react';
import { useHistory } from 'react-router';
import Auth from '../../helpers/auth';


const Dashboard: React.FC = () => {
  const history = useHistory();
 
  function handleLogout(): void {
    Auth.destroyToken();
    history.push('/login')
  }

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Dashboard;