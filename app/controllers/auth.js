exports.signup = function(req, res) {
  res.render('auth/signup.jade');
};

exports.signin = function(req, res) {
  res.render('auth/signin.jade');
};

exports.authCallback = function(req, res) {
};

exports.logout = function(req, res) {
};

