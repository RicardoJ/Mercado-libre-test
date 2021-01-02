import React from 'react';
import PropTypes from 'prop-types';
/**
 * @description summary of the product , price , name, sold and condition.
 * @param {Object} productDetail - all product details.
 * @param {string}  productDetail.condition - condition of the product.
 * @param {string} productDetail.sold_quantity - sold quantity.
 * @param {string} productDetail.title - The name of product.
 * @param {string} productDetail.price - the price of product.
 */
const Summary = ({ productDetail }) => {
  return (
    <div className='ui-detail-container__colright'>
      <div className='ui-subtitle'>
        {`${productDetail.condition} - ${productDetail.sold_quantity} vendidos`}
      </div>
      <div className='ui-title'>{productDetail.title}</div>
      <div className='ui-price'>$ {productDetail.price} </div>
      <form>
        <div className='ui-actions__container'>
          <button className='ui-button'>Comprar</button>
        </div>
      </form>
    </div>
  );
};

Summary.propTypes = {
  productDetail: PropTypes.object,
};

export default Summary;
