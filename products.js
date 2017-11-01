const products = await fetch('http://localhost:8080/products');

const productData = products[0];
const productInfo = products[0].description;
