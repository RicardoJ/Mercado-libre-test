import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import logoMercadoLibre from '../../assets/images/Logo_ML.png';
import SearchInput from '../../components/SearchInput';
import ProductService from '../../services/ProductService';
import { ProductContext } from '../../Context';
import { Link, useHistory } from 'react-router-dom';
import { PATH_SEARCH_RESULT } from '../../constants';
import { getSearchList } from '../../services/storage';
/**
 * @description header in application.
 * @param {Object} children - children components.
 *
 * @constant
 * @type {string} [PATH_SEARCH_RESULT].
 * @default
 */
const Header = ({ children }) => {
  const [product, setProduct] = useState('');
  const [productList, setProductList] = useState(getSearchList() || []);
  const history = useHistory();

  /** search products by name and redirects the view of search result.  */
  const searchProduct = e => {
    e.preventDefault();
    ProductService.getProductsByQuery(product).then(products => {
      setProductList(products);
    });
    history.push({
      pathname: PATH_SEARCH_RESULT,
      search: `?search=${product}`,
    });
  };

  return (
    <ProductContext.Provider value={productList}>
      <header className='nav-header'>
        <div className='nav-logo'>
          <Link to='/'>
            <img src={logoMercadoLibre} alt='logo mercado libre' />
          </Link>
        </div>
        <form className='nav-search' onSubmit={searchProduct}>
          <SearchInput
            value={product}
            onChange={e => {
              setProduct(e.target.value);
            }}
          />
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
