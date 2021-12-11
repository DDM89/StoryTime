
const express = require("express");
const userRoute = require('./users');

module.exports = function(app, dbs) {
    app.use(express.json());
    

    // Routes here
    
    app.use('/api/users', userRoute);

    // Root Endpoints (If any)
    // app.get('/', (req, res) => {
    //     res.json('maindir');
    // })

    return app
}