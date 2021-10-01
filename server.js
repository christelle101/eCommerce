//management of incoming requests with Express
const express = require('express');

//create app
const app = express();

//Send back a raw message every time the server got an 
//incoming request
app.get('*', (req, res) => {

    res.send('Express response');

});

//listen to the 3000 port
app.listen(3000);

//print out server location
console.log("Server successfully running on port: 3000");