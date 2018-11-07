const dbpath = "mongodb://localhost:27017/batch2";

const mongo = mongoose.connect(dbpath, {useNewUrlParser: true });
mongo.then(() => {
console.log('connected');
}).catch((err) => {
console.log('err', err);
});

var mySchema = new Schema({
    first_name: String,
    last_name: String
});
