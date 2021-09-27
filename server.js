//management of incoming requests with Express
const express = require('express');

//create app
const app = express();

//listen to the 3000 port
app.listen(3000);

//print out server location
console.log("Server successfully running of port: 3000");