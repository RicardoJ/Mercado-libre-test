import React, { useContext } from 'react';
import { ProductContext } from '../../Context';
import { TOTAL_LISTED_PRODUCTS } from '../../constants';
import SearchListImage from './SearchListImage';
import SearchListContent from './SearchListContent';
import { saveSearch } from '../../services/storage';
import SearchNotFound from './SearchNotFound';

const SearchList = () => {
  const products = useContext(ProductContext);
  const filteredProducts = products.filter(
    (_, index) => index < TOTAL_LISTED_PRODUCTS,
  );
  saveSearch(filteredProducts);

  return (
    <>
      {filteredProducts.length ? (
        filteredProducts.map(product => (
          <li key={product.id} className='ui-search-layout__item'>
            <SearchListImage product={product} />
            <SearchListContent product={product} />
          </li>
        ))
      ) : (
        <SearchNotFound />
      )}
    </>
  );
};

export default SearchList;
