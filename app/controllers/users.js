var database = require('../../config/database');

exports.profile = function(req, res) {
  res.render('users/profile.jade', {
    user: req.user
  });
};
