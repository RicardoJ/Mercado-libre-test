import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shipping from '../../assets/images/ic_shipping.png';

const SearchListContent = ({ product }) => {
  return (
    <>
      <div className='ui-search-result__content'>
        <div className='ui-search-item__group'>
          <span className='ui-search-link'>${product.price}</span>
          {product.shipping.free_shipping && (
            <img src={shipping} alt='shipping' />
          )}
        </div>
        <div className='ui-search-item__group--title'>
          <Link to={{ pathname: `/items/${product.id}` }} title={product.title}>
            {product.title}
          </Link>
        </div>
      </div>
      <div className='ui-search-result__location'>
        {product.address.state_name}
      </div>
    </>
  );
};

SearchListContent.propTypes = {
  product: PropTypes.object,
};

export default SearchListContent;
