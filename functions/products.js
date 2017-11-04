import {
  fetchProducts
  fetchProductImage
} from './productsServices';

const getProductsAndImage = async () => {
  const products = await fetchProducts();
  const productsWithImages = products.map(addImageToProduct);
}

export const addImageToProduct = async (product) => {
  const image = await fetchProductImage(product.id);
  const productWithImage = {
    ...product,
    image,
  }

  return productWithImage;
}
