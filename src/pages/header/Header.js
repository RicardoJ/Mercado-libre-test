import React from 'react';
import './styles.scss';
import logoMercadoLibre from '../../assets/images/Logo_ML.png';
import SearchInput from '../../components/SearchInput';

const Header = () => {
  return (
    <header className='nav-header'>
      <a className='nav-logo'>
        <img src={logoMercadoLibre} alt='logo mercado libre' />
      </a>
      <SearchInput />
    </header>
  );
};

export default Header;
