var auth = require('../app/controllers/auth');
var users = require('../app/controllers/users');

module.exports = function(app, passport) {
  app.get('/', function(req, res) {
    res.render('index.jade');
  });

  // login / register forms
  app.get('/signin', auth.signin);
  app.get('/signup/mentor', auth.signupMentors);
  app.get('/signup/mentee', auth.signupMentees);

  // POST dest for logging in
  app.post('/signin', passport.authenticate('local-signin', {
    successRedirect : '/profile',
    failureRedirect : '/signin',
    failureFlash : true
  }));

  app.post('/signup/mentor', passport.authenticate('local-signup', {
    successRedirect : '/profile',
    failureRedirect : '/signup/mentor',
    failureFlash : true
  }));

  app.post('/signup/mentee', passport.authenticate('local-signup', {
    successRedirect : '/profile',
    failureRedirect : '/signup/mentee',
    failureFlash : true
  }));

  // POST dest for sign out
  app.post('/logout', auth.logout);

  app.get('/profile', users.profile);
};
