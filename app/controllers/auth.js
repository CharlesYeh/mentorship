exports.signin = function(req, res) {
  res.render('auth/signin.jade');
};

exports.signupMentors = function(req, res) {
  res.render('auth/signup.jade',{
    type: 'mentor'
  });
};

exports.signupMentees = function(req, res) {
  res.render('auth/signup.jade',{
    type: 'mentee'
  });
};

exports.logout = function(req, res) {
};

