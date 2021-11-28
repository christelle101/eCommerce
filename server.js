//management of incoming requests with Express
const express = require('express');

//Use chalk to add colours on the console
const chalk = require('chalk');

//to access form data
let bodyParser = require('body-parser');

//The 404 middleware used when an incoming request
//hits a wrong route
const http404 = require('./middleware/route404');

//Access the path 
const path = require('path');

//Used for logging
const morgan = require("morgan");

//Add more logging
const {loggers, transports, format} = require("winston");

//Accessing MongoDB
const mongoose = require('mongoose');

//create app
const app = express();

//Send back a raw message every time the server got an 
//incoming request
app.get('*', (req, res) => {

    res.json({'msg':'Express response'});

});

//listen to the 3000 port
app.listen(3000);

//print out server location
console.log("Server successfully running on port: 3000");