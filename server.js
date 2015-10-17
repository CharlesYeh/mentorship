// npm modules
var bodyParser = require('body-parser');
var express = require('express');
var ecstatic = require('ecstatic');
var ecstatic = require('ecstatic');
var passport = require('passport');
var path = require('path');

// local modules
var routes = require('./config/routes.js');

// constants
var PORT = 3000;
var ROOT = __dirname;
var PUBLIC = path.join(__dirname, 'public');

// server init
var staticEngine = ecstatic({root: PUBLIC, autoIndex: true, handleError: false});

app = express();
// set up static + dynamic views dir / engine
app.use(staticEngine);
app.set('views', ROOT + '/app/views');
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

routes(app, passport);

var server = app.listen(PORT, function() {
  // complete callback
});

