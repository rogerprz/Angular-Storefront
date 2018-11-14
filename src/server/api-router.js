const express = require('express');


function apiRouter(database) {
  const router = express.Router();

  router.get('/products', (req, res) => {
    console.log("Products loaded successfully...");
    const productsCollection = database.collection('products');

    productsCollection.find({}).toArray((err, docs) => {
      return res.json(docs)
    });

  });

  router.post('/products', (req, res) => {
    const user = req.body;
    console.log("post here");
    const productsCollection = database.collection('products');

    productsCollection.insertOne(user, (err, r) => {
      if (err) {
        return res.status(500).json({ error: 'Error inserting new record.' })
      }
      const newRecord = r.ops[0];

      return res.status(201).json(newRecord);
    });
  });
  router.get('/cart', (req, res) => {
    console.log("Products loaded successfully...");
    const cartCollection = database.collection('cart');

    cartCollection.find({}).toArray((err, docs) => {
      return res.json(docs)
    });

  });

  router.post('/cart', (req, res) => {
    const user = req.body;
    console.log("Add to cart session");
    const cartCollection = database.collection('cart');

    cartCollection.insertOne(user, (err, r) => {
      if (err) {
        return res.status(500).json({ error: 'Error adding item to cart.' })
      }
      const newRecord = r.ops[0];

      return res.status(201).json(newRecord);
    });
  });
  return router
}

module.exports = apiRouter
