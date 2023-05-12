const express = require("express");
const app = express();
const {mongoose} = require("mongoose");
require("dotenv/config");

const bodyParser = require("body-parser");

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '10mb'}));

app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({limit: '10mb'}));
// Middle ware

// ROUTES
// GET()-> Fetch the data, POST() -> Push the data
//PATCH() -> updated, DELETE() -> Delete the data

// Import the Routes
const postRoute = require("./routs/posts");

app.use("/posts", postRoute);

// connect the mongoDb
// check or create the .env file for DB_CONNECTION string
mongoose.connect(process.env.DB_CONNECTION);

// Create a listening port
app.listen(4000)