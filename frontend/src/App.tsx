import React from 'react';
import Routes from './Routes';
import GlobalStyle from './style/globalStyles';
import { ToastContainer } from 'react-toastify';
import UserProvider from './contexts/UserProvider';

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