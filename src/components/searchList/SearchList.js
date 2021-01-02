import React, { useContext } from 'react';
import { ProductContext } from '../../Context';
import { TOTAL_LISTED_PRODUCTS } from '../../constants';
import SearchListImage from './SearchListImage';
import SearchListContent from './SearchListContent';
import { saveSearch } from '../../services/storage';
import SearchNotFound from './SearchNotFound';

/**
 * @description return products list.
 * @constant
 * @type {string} - [TOTAL_LISTED_PRODUCTS].
 * @default
 */
const SearchList = () => {
  /**
   * @param {object} ProductContext coming from the context.
   * @constant
   * @type {array} products.
   */
  const products = useContext(ProductContext);
  /**
   * filter all products and return the required quantity.
   * @constant
   * @type {array} filteredProducts.
   */
  const filteredProducts = products.filter(
    (_, index) => index < TOTAL_LISTED_PRODUCTS,
  );

  saveSearch(filteredProducts);

  return (
    /**
     * check that you get filtered products.
     * if there are products return product list in the search.
     * if not, return search not found.
     */
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
