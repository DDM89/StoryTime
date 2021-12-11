const dotenv = require("dotenv");
dotenv.config();

const dbConnectionString = process.env.DB_CONNECTION_STRING

if (! dbConnectionString) {
    throw new Error("db connection string not defined!")
}

const expressSessionSecretKey = process.env.EXPRESS_SESSION_SECRET_KEY

module.exports = {dbConnectionString, expressSessionSecretKey}