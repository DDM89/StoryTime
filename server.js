const express = require("express");

const config = require('./config')

const routes = require('./controllers/index.js')

const initializeDatabases = require('./database/db.js');

// const expressSession = require("express-session");

// const usersRouter = require('./controllers/users');


const app = express();

app.use(express.static("./client/build"));

// const handler = (req, res) => res.send(path.join(__dirname, "./client/public/index.html"))

// const route = ["/", "/stories", "/form"]

// route.forEach( rout => app.get(rout, handler) )

app.get('*', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, './client/build/')});
});

const port = process.env.PORT || 3001;

initializeDatabases(config.dbConnectionString).then(dbs => {
  
  app.use((req,res,next) => {
      req.db = dbs;
      return next();
  })
  routes(app, dbs).listen(port, () => console.log('Listening on port 3001'))
}).catch(err => {
  console.error('Failed to make all database connections!')
  console.error(err)
  process.exit(1)
})

app.use(express.json());







// app.listen(port, () => {
//   console.log(`listening on port  http://localhost:${port}`);
// });