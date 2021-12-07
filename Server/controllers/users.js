
const express = require('express');
const {ObjectId} = require("mongodb");
const router = express.Router();

router.get('/', (req, res) => {
    // TODO: Move this logic to models
    req.db.production.collection('users').find().toArray((err, docs) => {
        res.json(docs);
    })
});

module.exports = router;