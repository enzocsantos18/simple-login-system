import React from 'react';
import Routes from './routes';
import GlobalStyle from './style/globalStyles';
import { ToastContainer } from 'react-toastify';
import UserProvider from './providers/UserProvider';
// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      
      <GlobalStyle/>
      <ToastContainer/>
      <UserProvider>
        <Routes/>
      </UserProvider>

    </>
  );
}

export default App;