const express = require('express');
const app = express();
const products = require('../products.json');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

app.get('/api/products', getProducts);

app.get('/api/products/:id', getProduct);


app.listen(3001, ()=> console.log('Server is running on 3001!'));