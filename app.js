const express = require("express");
const app = express();
const {mongoose} = require("mongoose");
require("dotenv/config");

const bodyParser = require("body-parser");

app.use(bodyParser.json());
// Middle ware

// ROUTES
// GET()-> Fetch the data, POST() -> Push the data
//PATCH() -> updated, DELETE() -> Delete the data

// Import the Routes
const postRoute = require("./routs/posts");

app.use("/posts", postRoute);

// connect the mongoDb
mongoose.connect(process.env.DB_CONNECTION);

// Create a listening port
app.listen(4000)