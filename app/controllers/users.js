var database = require('../../config/database');

// POST /users
exports.create = function(req, res) {
  // make sure user doesn't exist
  database.paramQuery(
    "SELECT * FROM users WHERE username = ?",
    [req.body.username],
    function(error, results, fields) {
      database.paramQuery(
        "INSERT INTO users SET ?",
        { username: req.body.username, password: req.body.password },
        function(error, results, fields) {
          console.log(error);
          console.log(results);
          console.log(fields);
          res.render('users/view_one.jade', {
          });
        });
    });
};
