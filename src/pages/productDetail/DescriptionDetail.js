import React from 'react';
import PropTypes from 'prop-types';
/**
 * @description product detail, image and description text.
 * @param {Object} productDetail - all product details.
 * @param {array}  productDetail.pictures - product images.
 * @param {string} productDetail.id - ID of the product.
 * @param {string} description - product description.
 */
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
  description: PropTypes.string,
};

export default DescriptionDetail;
