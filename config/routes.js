var auth = require('../app/controllers/auth');
var users = require('../app/controllers/users');

module.exports = function(app, passport) {
  app.get('/', function(req, res) {
    res.render('index.jade');
  });

  // login / register forms
  app.get('/signin', auth.signin);
  app.get('/signup', auth.signup);

  // POST dest for logging in
  app.get('/authCallback', auth.authCallback);
  // POST dest for sign out
  app.get('/logout', auth.logout);

  app.post('/users', users.create);
};
