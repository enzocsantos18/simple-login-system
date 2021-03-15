import React, {useEffect} from 'react';
import { useHistory } from 'react-router';


const EmailConfirmationPage: React.FC = () => {

  const history = useHistory();
  useEffect(() => {
    const infos = JSON.parse(localStorage.getItem('auth') as string);

    infos.isConfirmed = true;

    localStorage.setItem("auth",JSON.stringify(infos));


    history.push('/')

  }, [])


  return <div />;
}

export default EmailConfirmationPage;