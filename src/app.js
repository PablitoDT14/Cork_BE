require('dotenv').config();
const express = require('express');
const bodyParser= require('body-parser');
const {databaseService}= require('./services/databaseService');

const app = express();
app.use(bodyParser.json());

require('../routes')(app, databaseService());


app.listen(3000, ()=>{
 console.log('App listening on Port 3000'); 
});


