import React, { useContext } from 'react';
import logoMercadoLibre from '../assets/images/Logo_ML@2x.png.png';
import shipping from '../assets/images/ic_shipping.png';
import { ProductContext } from '../Context';
import { TOTAL_LISTED_PRODUCTS } from '../constants';

const SearchResultList = () => {
  const products = useContext(ProductContext);
  const filteredProducts = products.filter(
    (_, index) => index < TOTAL_LISTED_PRODUCTS,
  );
console.log(filteredProducts);
  return (
    <>
      {filteredProducts.map((product, index) => (
        <li key={index} className='ui-search-layout__item'>
          <div className='ui-search-result__image'>
            <a href='#' title='titulo get endpoint'>
              <img
                className='ui-search-result-image__element'
                width='180'
                height='180'
                src={logoMercadoLibre}
                alt='logo mercado libre'
              />
            </a>
          </div>
          <div className='ui-search-result__content'>
            <div className='ui-search-item__group'>
              <a href='#' className='ui-search-link'>
                $1.908
              </a>
              <img src={shipping} alt='shipping' />
            </div>
            <div className='ui-search-item__group--title'>
              <a href='#'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </a>
            </div>
          </div>
          <div className='ui-search-result__location'>ciudad</div>
        </li>
      ))}
    </>
  );
};

export default SearchResultList;
