const MongoClient = require('mongodb').MongoClient;


function connect(url) {
    // specify db name
    return MongoClient.connect(url).then(client => client.db("users"));
}

module.exports = async function(mongoURL) {
    let databases = await Promise.all([connect(mongoURL)]);

    return {
        // return multiple database connections
        production: databases[0]
    }
}