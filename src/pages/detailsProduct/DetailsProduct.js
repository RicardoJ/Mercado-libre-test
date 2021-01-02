import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss';
import DetailDescription from './DetailDescription';
import Summary from './Summary';
import ProductService from '../../services/ProductService';
import { ProductContext } from '../../Context';

const DetailsProduct = () => {
  const [detailProduct, setDetailProduct] = useState('');
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
    <ProductContext.Provider
      value={{
        detailProduct: detailProduct,
        description: description.plain_text,
      }}
    >
      <section className='ui-detail-container'>
        <DetailDescription />
        <Summary />
      </section>
    </ProductContext.Provider>
  );
};

export default DetailsProduct;
