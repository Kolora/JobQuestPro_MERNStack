import express from "express";
import bodyParser from "body-parser";
import xss from "xss-clean";
import morgan from "morgan";
import mongoSanitize from "express-mongo-sanitize";
import router from "./routes/index.js";
// import dbconnection from "./dbConfig/dbConnection.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
// To run server import express, use app variable to use
// const express = require("express");

const app = express();

//set port
const PORT = 8080;

//enable env variables
// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config();

//import cors to connect server and client
// const cors = require("cors");
import cors from "cors";

//json middleware to connect server and client
app.use(express.json());
app.use(cors());
app.use(xss());
app.use(mongoSanitize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//connect to database via config file
import dbConnection from "./dbConfig/dbConnection.js";
// const connectDatabase = require("./config");
dbConnection();

//import routes
app.use(router);

//error middleware
app.use(errorMiddleware);

//server listens to port
app.listen(PORT, () => {
  console.log("server listening on port: ", PORT);
});
