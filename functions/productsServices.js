const BASE_API_URL = 'http://localhost:8080';

const get = (url) => (
  fetch(url)
    .then(response => response.json());
);

export const fetchProducts = () => (
  get(`${BASE_API_URL}/products`);
);

export const fetchProductImage = (productId) => (
  get(`${BASE_API_URL}/products/${productId}/image`);
);
