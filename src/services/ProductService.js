import { PRODUCT_ENDPOINTS } from '../constants';
import API from './api';

const ProductService = {
  getProductsByQuery: async product => {
    const response = await API.get(PRODUCT_ENDPOINTS.LIST_PRODUCT, {
      params: {
        q: product,
      },
    });
    return response.data.results;
  },
};

export default ProductService;
