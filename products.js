const products = await fetch('http://localhost:8080/products');

const firstProduct = products[0];
const firstProductDescription = products[0].description;
