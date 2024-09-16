const express = require('express');
const app = express();
const port = 3000;
const products = require('./products.json');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/products', (req, res) => {
  res.json(
    products.map((product) => ({
      productID: product.productID,
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      categoryID: product.categoryID,
    })),
  );
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json(
    products.find((product) => product.productID === Number(id)) || "El producto no se encontró",
  );
});

app.get('/categories', (req, res) => {
  const categories = products.map((product) => product.categoryID);
  const uniqueCategories = [...new Set(categories)];
  res.json(uniqueCategories);
});

app.get('/categories/:id', (req, res) => {
  const { id } = req.params;
  res.json(
    products.filter((product) => product.categoryID === Number(id)) || "La categoría no se encontró",
  );
});


app.get('/categories/:categoryID/products/:productID', (req, res) => {
  const { categoryID, productID } = req.params;
  res.json(
    products.find(
      (product) =>
        product.productID === Number(productID) &&
        product.categoryID === Number(categoryID),
    ) || "El producto no se encontró",
  );
});










/* Levantar el servidor */
app.listen(port, () => {
  console.log(
    `El servidor está corriendo en el puerto ${port} 🚀: http://localhost:${port}`,
  );
});
