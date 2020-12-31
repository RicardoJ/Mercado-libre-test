import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import logoMercadoLibre from '../../assets/images/Logo_ML.png';
import SearchInput from '../../components/SearchInput';
import ProductService from '../../services/ProductService';
import { ProductContext } from '../../Context';

const Header = ({ children }) => {
  const [product, setProduct] = useState('');
  const [productList, setProductList] = useState([]);
  const getSearch = e => {
    setProduct(e.target.value);
  };

  const searchProduct = e => {
    e.preventDefault();
    ProductService.getProductsByQuery(product).then(products => {
      setProductList(products);
    });
  };

  return (
    <ProductContext.Provider value={productList}>
      <header className='nav-header'>
        <a className='nav-logo'>
          <img src={logoMercadoLibre} alt='logo mercado libre' />
        </a>
        <form className='nav-search' onSubmit={searchProduct}>
          <SearchInput value={product} onChange={getSearch} />
        </form>
      </header>
      {children}
    </ProductContext.Provider>
  );
};
Header.propTypes = {
  children: PropTypes.object,
};
export default Header;
