import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss';
import DetailDescription from './DetailDescription';
import Summary from './Summary';
import ProductService from '../../services/ProductService';

const DetailsProduct = () => {
  const [productDetail, setDetailProduct] = useState('');
  const [description, setDescription] = useState('');
  let { id } = useParams();

  useEffect(() => {
    ProductService.getProductByID(id).then(idProduct => {
      setDetailProduct(idProduct);
    });
    ProductService.getProductDescription(id).then(idProduct => {
      setDescription(idProduct);
    });
  }, []);

  return (
    <section className='ui-detail-container'>
      <DetailDescription
        productDetail={productDetail}
        description={description.plain_text}
      />
      <Summary productDetail={productDetail} />
    </section>
  );
};

export default DetailsProduct;
