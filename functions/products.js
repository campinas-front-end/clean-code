const getProducts = () => {
  fetch('http://localhost:8080/products')
    .then(res => res.json())
    .then(products => {
      for (let i = 0; i < products.length; i++) {
        fetch(`http://localhost:8080/products/images/${products[i].id}`)
          .then(res => res.json())
          .then(image => {
            products[i].image = image;
          });
      }
    })
}
