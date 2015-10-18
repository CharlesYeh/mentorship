// npm modules
var bodyParser = require('body-parser');
var ecstatic = require('ecstatic');
var express = require('express');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var path = require('path');

// local modules
var routes = require('./config/routes.js');
var configPassport = require('./config/passport.js');

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

app.use(session({
  secret: 'asdlkf',
  resave: true,
  saveUninitialized: true
} )); // session secret
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); // use connect-flash for flash messages stored in session

configPassport(passport);
routes(app, passport);

var server = app.listen(PORT, function() {
  // complete callback
});

