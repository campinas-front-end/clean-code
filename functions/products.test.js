import addImageToProduct from './products';
import * as productsServices from './productsServices';

describe('addImageToProduct', () => {
  it('should add an image to a given product', () => {
    productsServices.fetchProductImage = Promise.resolve('http://foo.bar/baz.jpg');

    const product = {
      id: 1,
      name: 'My product',
    };

    const expectedProduct = {
      id: 1,
      name: 'My product',
      image: 'http://foo.bar/baz.jpg',
    };

    expect(addImageToProduct(product.id)).toEqual(expectedProduct);
  });
});
