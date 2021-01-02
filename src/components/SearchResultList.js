import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import shipping from '../assets/images/ic_shipping.png';
import { ProductContext } from '../Context';
import { TOTAL_LISTED_PRODUCTS } from '../constants';

const SearchResultList = () => {
  const products = useContext(ProductContext);
  const filteredProducts = products.filter(
    (_, index) => index < TOTAL_LISTED_PRODUCTS,
  );

  return (
    <>
      {filteredProducts.map(product => (
        <li key={product.id} className='ui-search-layout__item'>
          <div className='ui-search-result__image'>
            <Link
              to={{ pathname: `/items/${product.id}` }}
              title={product.title}
            >
              <img
                className='ui-search-result-image__element'
                width='180'
                height='180'
                src={product.thumbnail}
                alt='logo mercado libre'
              />
            </Link>
          </div>
          <div className='ui-search-result__content'>
            <div className='ui-search-item__group'>
              <span className='ui-search-link'>${product.price}</span>
              {product.shipping.free_shipping && (
                <img src={shipping} alt='shipping' />
              )}
            </div>
            <div className='ui-search-item__group--title'>
              <Link
                to={{ pathname: `/items/${product.id}` }}
                title={product.title}
              >
                {product.title}
              </Link>
            </div>
          </div>
          <div className='ui-search-result__location'>
            {product.address.state_name}
          </div>
        </li>
      ))}
    </>
  );
};

export default SearchResultList;
