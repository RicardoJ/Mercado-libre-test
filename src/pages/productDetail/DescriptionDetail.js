import React from 'react';
import PropTypes from 'prop-types';

const DescriptionDetail = ({ productDetail, description }) => {
 
  return (
    <div className='ui-detail-container__colleft'>
      <figure className='ui-figure'>
        <img
          className='ui-figure__image'
          src={productDetail.pictures && productDetail.pictures[0].url}
          alt={productDetail.title}
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

DescriptionDetail.propTypes = {
  productDetail: PropTypes.object,
  description: PropTypes.object,
};

export default DescriptionDetail;
