var express = require('express');

path = require('path');

app = express();

var bodyParser = require('body-parser');

var routes = require('./server/routes.js');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client')));

app.use(express.static(path.join(__dirname, './bower_components')));

routes(app);

app.listen(8000, function(){});