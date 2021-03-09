import React from 'react';
import Routes from './routes';
import GlobalStyle from './style/globalStyles';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle/>
      <Routes/>
    </>
  );
}

export default App;