const { MongoClient, ObjectId } = require("mongodb");

const db = require("../database/db");

const users = {
    getUsers() {
        const cursor = db.collection('users').find()
        cursor.toArray()
        return cursor 
    }
}


module.exports = users;