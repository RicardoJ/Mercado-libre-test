import React, { useContext } from 'react';

import { ProductContext } from '../../Context';

const DetailDescription = () => {
  const { detailProduct, description } = useContext(ProductContext);
  return (
    <div className='ui-detail-container__colleft'>
      <figure className='ui-figure'>
        <img
          height='180'
          src={detailProduct.thumbnail}
          alt='logo mercado libre'
        />
      </figure>
      <div className='ui-detail-description'>
        <div className='ui-detail-description__title'>
          Descripción del producto
        </div>
        <div className='ui-detail-description__content'>{description}</div>
      </div>
    </div>
  );
};

export default DetailDescription;
