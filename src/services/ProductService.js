import API from './config';

const PRODUCT_ENDPOINTS = {
  LIST_PRODUCT: '/sites/MLA/search',
};

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
