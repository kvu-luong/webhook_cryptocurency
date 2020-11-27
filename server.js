'use strict'

let express = require('express');
let app = express();
let bodyParser = require('body-parser');
const logger = require('./logger');

app.use(bodyParser.urlencoded({extended: 'true'}));
app.use(bodyParser.json());

//allow all origin
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');
	next();
});

//let handle webhook
let webhook = require("./webhook");
app.post('/webhook', webhook);
//------------end webhook-----------
app.listen(8080);
// console.log('info', `Server is listening on port 8080`);
logger.log('info', `server listening on port 8080`);