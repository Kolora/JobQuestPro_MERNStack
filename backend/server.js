// To run server import express, use app variable to use
const express = require("express");
const app = express();

//enable env variables
require("dotenv").config();

//import cors to connect server and client
const cors = require("cors");

//json middleware to connect server and client
app.use(express.json());
app.use(cors());

//connect to database via config file
const connectDatabase = require("./config");
connectDatabase();

//set port
const PORT = 8080;

//import routes

//server listens to port
app.listen(PORT, () => {
  console.log("server listening on port: ", PORT);
});
