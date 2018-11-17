router.get('/users', (req, res) => {
  const id = req.params.id;
  const username = req.user.username



  const usersCollection = database.collection('users');

  usersCollection.findOne({
    username: username
  })

  .then(userFound => {
    if (!userFound){
      return res.status(404).end();
    }
    return res.status(200).json(userFound)
  })
  .catch(err => console.log(err));

});


// start of users
// router.get('/users', (req, res) => {
//   console.log("Products loaded successfully...");
//   const usersCollection = database.collection('users');
//
//   usersCollection.find({}).toArray((err, docs) => {
//     return res.json(docs)
//   });
//
// });


{},{$pull:{"data":{"id":3}}},{multi:true}

usersCollection.findOneAndUpdate({ _id: id },{
  $pull: {
    "cart" : {
      _id: productID }
      }
    }, false, true,
    (err, r) => {
  if (err) {
    return res.status(500).json({ error: 'Error adding to cart' })
  }
  console.log("WE DID SOMETHING!!!");
  const newRecord = r.value.cart;

  return res.status(201).json(newRecord);
});
