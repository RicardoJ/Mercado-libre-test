import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss';
import DescriptionDetail from './DescriptionDetail';
import Summary from './Summary';
import ProductService from '../../services/ProductService';
/**
 * @description Page product detail.
 * @returns product details, image, description, name, price, sold quantity.
 */
const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState({});
  const [description, setDescription] = useState('');
  /** get ID from the browser url.  */
  let { id } = useParams();

  useEffect(() => {
    ProductService.getProductByID(id).then(product => {
      setProductDetail(product);
    });
    ProductService.getProductDescription(id).then(idProduct => {
      setDescription(idProduct);
    });
  }, []);

  return (
    <section className='ui-detail-container'>
      <DescriptionDetail
        productDetail={productDetail}
        description={description.plain_text}
      />
      <Summary productDetail={productDetail} />
    </section>
  );
};

export default ProductDetail;
