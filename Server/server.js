const express = require("express");
const routes = require('./controllers/index.js')

const initializeDatabases = require('./database/db.js');
// const dotenv = require("dotenv");
// dotenv.config();
// const expressSession = require("express-session");

// const usersRouter = require('./controllers/users');


const app = express();

app.use(express.static("../client/build"));

// const port = process.env.PORT || 3001;

initializeDatabases().then(dbs => {
  
  app.use((req,res,next) => {
      req.db = dbs;
      return next();
  })
  routes(app, dbs).listen(3001, () => console.log('Listening on port 3001'))
}).catch(err => {
  console.error('Failed to make all database connections!')
  console.error(err)
  process.exit(1)
})

app.use(express.json());







// app.listen(port, () => {
//   console.log(`listening on port  http://localhost:${port}`);
// });