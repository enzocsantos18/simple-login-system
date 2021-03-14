import React from 'react';
import Routes from './Routes';
import GlobalStyle from './style/globalStyles';
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle/>
      <ToastContainer/>
      <Routes/>
    </>
  );
}

export default App;