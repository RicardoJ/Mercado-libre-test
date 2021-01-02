import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
/**
 * @description return image (thumbnail) of the product in the search list.
 * @param {Object} product product from search list.
 * @param {string} product.id - ID of the product.
 * @param {string} product.thumbnail - thumbnail product's image.
 * @param {string} product.title - The name of the product.
 */
const SearchListImage = ({ product }) => {
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
