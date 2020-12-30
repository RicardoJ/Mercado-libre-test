import React, { useState } from 'react';
import './styles.scss';
import logoMercadoLibre from '../../assets/images/Logo_ML.png';
import SearchInput from '../../components/SearchInput';

const Header = () => {
  const [product, setProduct] = useState('');

  const getSearch = e => {
    setProduct(e.target.value);
  };

  const searchProduct = e => {
    e.preventDefault();
    console.log('ENVIAR ', product);
  };
  return (
    <header className='nav-header'>
      <a className='nav-logo'>
        <img src={logoMercadoLibre} alt='logo mercado libre' />
      </a>
      <form className='nav-search' onSubmit={searchProduct}>
        <SearchInput value={product} onChange={getSearch}/>
      </form>
    </header>
  );
};

export default Header;
