const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const checkJwt = require("express-jwt")


function apiRouter(database) {
  const router = express.Router();

  router.use(
        checkJwt({ secret: process.env.JWT_SECRET }).unless({ path: '/api/authenticate'})
    );

    router.use((err, req, res, next) => {
      if (err.name === 'UnauthorizedError') {
        res.status(401).send({ error: err.message });
      };
    });

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
  // start of cart
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
  // users with :id
  router.get('/users/:id', (req, res) => {
    console.log("User ID...");

    const usersCollection = database.collection('users/:id');

    usersCollection.findById(req.params.id).toArray((err, docs) => {
      return res.json(docs)
    });

  });
  // start of users
  router.get('/users', (req, res) => {
    console.log("Products loaded successfully...");
    const usersCollection = database.collection('users');

    usersCollection.find({}).toArray((err, docs) => {
      return res.json(docs)
    });

  });

  router.post('/users', (req, res) => {
    const user = req.body;
    console.log("Users route");
    const usersCollection = database.collection('users');

    usersCollection.insertOne(user, (err, r) => {
      if (err) {
        return res.status(500).json({ error: 'Error inserting new record.' })
      }
      const newRecord = r.ops[0];

      return res.status(201).json(newRecord);
    });
  });

  router.post('/authenticate', (req, res)=>{
    const user = req.body;

    const usersCollection = database.collection('users');

    usersCollection
      .findOne({ username: user.username }, (err, result)=>{
        if (!result){
          return res.status(404).json({ error: 'user not found'})
        }
        if (!bcrypt.compareSync(user.password, result.password)){
          return res.status(401).json({ error: 'incorrect password'})
        }

        const payload = {
          username: result.username,
          admin: result.admin
        }
        const  token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '9h'});

        return res.json({
          message: 'sucess',
          token: token
        });
      });
  })


  return router
}

module.exports = apiRouter
