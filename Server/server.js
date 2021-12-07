const express = require("express");

const dotenv = require("dotenv");
dotenv.config();
// const expressSession = require("express-session");

const usersRouter = require('./controllers/users');


const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());

app.use('/users', usersRouter);





app.listen(port, () => {
  console.log(`listening on port  http://localhost:${port}`);
});