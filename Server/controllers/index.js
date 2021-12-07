
const express = require("express");
module.exports = function(app, dbs) {
    app.use(express.json());


    // Routes here
    const userRoute = require('./users');
    app.use('/api/users', userRoute);

    // Root Endpoints (If any)
    app.get('/', (req, res) => {
        res.json('maindir');
    })

    return app
}