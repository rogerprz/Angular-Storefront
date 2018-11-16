router.get('/users', (req, res) => {
  const id = req.params.id;
  const username = req.user.username

  console.log("QQQ req.user",req.user)
  console.log('USSSS username', username);
  console.log("IDIDID req.params.id", id)
  console.log('UUU req.params',req.params)

  const usersCollection = database.collection('users');
  console.log('PPP',req.params)
  console.log("CCC", usersCollection);
  usersCollection.findOne({
    username: username
  })

  .then(userFound => {
    console.log("FFF", userFound);
    if (!userFound){
      return res.status(404).end();
    }
    // console.log(json(userFound));
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
