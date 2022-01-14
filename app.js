//import express
const express = require('express')

//membuat object
const app = express();

//middleware
app.use(express.json());

//definisikan routes
const router = require("./routes/api");
app.use(router);

//definisi port
app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`);
});
