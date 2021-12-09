
const express = require('express');
const {ObjectId} = require("mongodb");
const router = express.Router();

router.get('/', (req, res) => {
    // TODO: Move this logic to models
    req.db.production.collection('users').find().toArray((err, docs) => {
        res.json(docs);
    })
});

router.post('/', (req, res) => {
    console.log(req.body)
    req.db.production.collection('users').insertOne({name:req.body.name, email: req.body.email, passwordHash: req.body.password , stories: [], comments:[]});
    res.json({ message: 'logged in successfully'})
})

module.exports = router;