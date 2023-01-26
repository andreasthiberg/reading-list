const express = require("express");
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

/* Get route modules */
const books = require('./routes/books');

app.use('/books', books);

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Reading list backend listening on port ${port}!`);
});
