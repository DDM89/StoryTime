const MongoClient = require('mongodb').MongoClient;
const mongoURL = 'mongodb://127.0.0.1:27017'

function connect(url) {
    // specify db name
    return MongoClient.connect(url).then(client => client.db("users"));
}

module.exports = async function() {
    let databases = await Promise.all([connect(mongoURL)]);

    return {
        // return multiple database connections
        production: databases[0]
    }
}