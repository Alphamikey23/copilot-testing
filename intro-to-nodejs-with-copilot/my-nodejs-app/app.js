const express = require('express');
const app = express();
const port = 3000;



app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Create an API endpoint that returns a list of products
app.get('/products', (req, res) => {
  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ];
  res.json(products);
});



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


