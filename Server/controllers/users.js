const express = require('express');

const users = require("../models/users_model");

const router = express.Router();

router.get('/', (req, res) => {
    const cursor = db.collection('users').find()
    cursor.toArray().then((result) => {
        // console.log(result)
        res.json(result)
    })
})

module.exports = router;