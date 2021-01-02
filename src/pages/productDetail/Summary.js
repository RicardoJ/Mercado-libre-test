import React from 'react';
import PropTypes from 'prop-types';

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
