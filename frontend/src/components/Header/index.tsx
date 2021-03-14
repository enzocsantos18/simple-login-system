import React from 'react';
import { Link } from 'react-router-dom';
import Options from '../Options'
import { HeaderStyle } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <Link to="/"><h1>Dashboard</h1></Link>
      <Options />
    </HeaderStyle>


  );
}

export default Header;