const express = require('express');
const bodyParser = require('body-parser');

//Create express app
const app = express();

//Setup the server port
const port = process.env.port || 5000;

//Allow CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Parse request data content type application/x-ww-fore-rulencoded
app.use(bodyParser.urlencoded({extended: false}));

//Parse request data content type application/json
app.use(bodyParser.json());


//Define root node
app.get('/',(req,res)=>{
    res.send("Hello World");
});

// Import students routes
const studentRoutes = require("./src/routes/student.route");

//Create students routes
app.use('/api/v1/student',studentRoutes);

//Listen to the port
app.listen(port, ()=>{
    console.log(`Express Server is running at ${port}`);
})