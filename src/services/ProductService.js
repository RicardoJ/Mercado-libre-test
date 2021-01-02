import { PRODUCT_ENDPOINTS } from '../constants';
import API from './api';

/**
 *  @description consume API.
 *  @constant
 *  @type {string} [PRODUCT_ENDPOINTS.LIST_PRODUCT].
 *  @type {string} [PRODUCT_ENDPOINTS.PROUDCT_BY_ID].
 *  @default
 */

const ProductService = {
  getProductsByQuery: async product => {
    const response = await API.get(PRODUCT_ENDPOINTS.LIST_PRODUCT, {
      params: {
        q: product,
      },
    });
    return response.data.results;
  },
  getProductByID: async idProduct => {
    const response = await API.get(
      `${PRODUCT_ENDPOINTS.PROUDCT_BY_ID}${idProduct}`,
    );
    return response.data;
  },
  getProductDescription: async idProduct => {
    const response = await API.get(
      `${PRODUCT_ENDPOINTS.PROUDCT_BY_ID}${idProduct}/description`,
    );
    return response.data;
  },
};

export default ProductService;
