import React from 'react';
import { UserContext } from '../../providers/UserProvider';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const {handleLogout} = React.useContext(UserContext);

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Dashboard;