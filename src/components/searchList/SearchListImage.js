import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const SearchListImage = ({product}) => {
  return (
    <div className='ui-search-result__image'>
      <Link to={{ pathname: `/items/${product.id}` }} title={product.title}>
        <img
          className='ui-search-result-image__element'
          width='180'
          height='180'
          src={product.thumbnail}
          alt={product.title}
        />
      </Link>
    </div>
  );
};

SearchListImage.propTypes = {
    product: PropTypes.object,
  };

export default SearchListImage;
