import React from 'react';
import Options from '../Options'
import { HeaderStyle } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <h1>Dashboard</h1>
      <Options />
    </HeaderStyle>


  );
}

export default Header;