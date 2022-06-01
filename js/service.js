// Express to run server and routes
const express = require('express');

// instance of app 
const app = express();
// Dependencies
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const cors = require('cors');

app.use(cors());

app.use(express.static('..\..\weather-project'));


