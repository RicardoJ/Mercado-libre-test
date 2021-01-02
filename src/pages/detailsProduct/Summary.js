import React, { useContext } from 'react';
import { ProductContext } from '../../Context';

const Summary = () => {
  const {detailProduct }= useContext(ProductContext);

  return (
    <div className='ui-detail-container__colright'>
      <div className='ui-subtitle'>
        {`${detailProduct.condition} - ${detailProduct.sold_quantity} vendidos`}
      </div>
      <div className='ui-title'>{detailProduct.title}</div>
      <div className='ui-price'>$ {detailProduct.price} </div>
      <form>
        <div className='ui-actions__container'>
          <button className='ui-button'>Comprar</button>
        </div>
      </form>
    </div>
  );
};

export default Summary;
