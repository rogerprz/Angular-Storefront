const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const checkJwt = require('express-jwt');
const mongoDB = require('mongodb')

function apiRouter(database) {
  const router = express.Router();

  router.use(
      checkJwt({ secret: process.env.JWT_SECRET }).unless({ path: '/api/authenticate'})
  );

  router.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send({ error: err.message });
    }
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
    const user_id = req.params.id;
    const id = new mongoDB.ObjectID(user_id);

    const usersCollection = database.collection('users');

    usersCollection.findOne({ _id: id })
    .then(userFound => {
      if (!userFound){ return res.status(404).end(); }
      return res.status(200).json(userFound)
    })
    .catch(err => console.log(err));

  });
  // add product to cart/session
  router.post('/users/:id', (req, res) => {
    const user_id = req.params.id;
    const id = new mongoDB.ObjectID(user_id);
    const newProduct = req.body
    console.log("user iiid", id);
    // console.log("Add to cart route");
    console.log("bodyyy params",req.body);
    console.log("*************************");
    const usersCollection = database.collection('users');

    usersCollection.findOneAndUpdate({ _id: id },{
      "$push": {
        cart: newProduct }
      },
        (err, r) => {
      if (err) {
        return res.status(500).json({ error: 'Error adding to cart' })
      }
      const newRecord = r.value.cart;

      return res.status(201).json(newRecord);
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

  router.post('/authenticate', (req, res) => {
    const user = req.body;
    console.log("Authenticated!!!");
    const usersCollection = database.collection('users');

    usersCollection
      .findOne({ username: user.username }, (err, result)=>{
        if (!result) {
          return res.status(404).json({ error: 'user not found'})
        }
        if (!bcrypt.compareSync(user.password, result.password)) {
          return res.status(401).json({ error: 'incorrect password'})
        }

        const payload = {
          username: result.username,
          admin: result.vendor
        }
        const  token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '9h'});

        return res.json({
          message: 'sucessfully logged in!!!',
          id: result._id,
          vendor: result.vendor,
          token: token
        });
      });
  })


  return router
}

module.exports = apiRouter
