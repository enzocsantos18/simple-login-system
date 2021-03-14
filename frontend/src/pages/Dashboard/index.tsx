import React from 'react';
import { useHistory } from 'react-router';
import Header from '../../components/Header';
import Auth from '../../helpers/auth';


const Dashboard: React.FC = () => {
  const history = useHistory();
 

  return (
 
    <Header/>
  );
}

export default Dashboard;