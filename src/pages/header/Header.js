import React from 'react';
import './styles.scss';
import logoMercadoLibre from '../../assets/images/Logo_ML.png';

const Header = () => {
  return (
    <header className='nav-header'>
      <a className='nav-logo'>
        <img
          src={logoMercadoLibre}
          alt='logo mercado libre'
        />
      </a>
      <input
        className='nav-search-input'
        autoFocus
        maxlLength="120"
        type='text'
        placeholder='Nunca dejes de buscar'
      ></input>
    </header>
  );
};

export default Header;
