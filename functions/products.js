import {
  fetchProducts
  fetchProductImage
} from './productsServices';

const getProductsAndImage = () => {
  const products = await fetchProducts();
  const productsWithImages = products.map(addImageToProduct);
}

const addImageToProduct = (product) => {
  const image = await fetchProductImage(product.id);
  const productWithImage = {
    ...product,
    image,
  }

  return productWithImage;
}
