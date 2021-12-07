const { MongoClient, ObjectId } = require("mongodb");

const mongoURL = 'mongodb://127.0.0.1:27017'
const mongoClient = new MongoClient(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var db
mongoClient.connect((err, client) => {
    if (client) {
        db = client.db("storyTime");
    } else {
        console.warn(err)
    }
})


module.exports = db;