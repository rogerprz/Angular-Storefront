const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const path = require('path');
const createExpressApp = require('./create-express-app');

require('dotenv').config();

MongoClient.connect(process.env.DB_CONN, (err, db) => {

  console.log('connected to mongodb...');

  createExpressApp(db)
  .listen(3000, () => {
    database = db;
    console.log('listening on port 3000...');
  });

});
// Ice box code
// app.get('/api/contacts', (req, res) => {
//
//   const contactsCollection = database.collection('contacts');
//
//   contactsCollection.find({}).toArray((err, docs) => {
//     return res.json(docs)
//   });
//
// });

// app.post('/api/contacts', (req, res) => {
//   const user = req.body;
//
//   const contactsCollection = database.collection('contacts');
//
//   contactsCollection.insertOne(user, (err, r) => {
//     if (err) {
//       return res.status(500).json({ error: 'Error inserting new record.' })
//     }
//
//     const newRecord = r.ops[0];
//
//     return res.status(201).json(newRecord);
//   });
// });
