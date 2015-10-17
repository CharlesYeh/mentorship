var database = require('database');
var bcrypt = require('bcrypt');

// serialize / deserialize between the session var
passport.serializeUser(function(user, done) {
  // save user id
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  // get user from saved id
  database.paramQuery("SELECT * FROM users WHERE id = ?", [id], function(err, rows) {
    done(err, rows[0]);
  });
});

// takes a signup request, returns user object
passport.use('local-signup', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true,
}, function(req, username, password, done) {
  // make sure username isn't already used
  database.query("SELECT * FROM users WHERE username = ?", [username], function(err, rows) {
    if (err) {
      return done(err);
    }
    if (rows.length) {
      return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
    } else {
      // create user
      var userObj = {
        username: username,
        password: bcrypt.hashSync(password, null, null),
      };
      database.paramQuery(
        "INSERT INTO users (username, password) VALUES (?, ?)",
        [userObj.username, userObj.password],
        function(err, rows) {
          userObj.id = rows.insertId;
          return done(null, userObj);
        }
      );
    }
  });
}));

passport.use('local-signin', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true,
}, function(req, username, password, done) {
  // look in mysql
  database.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    function(err, rows) {
      if (rows.length) {
        // user exists, now check pw
        var userObj = rows[0];
        // first argument needs to be hashed
        if (bcrypt.compareSync(password, userObj.password)) {
          return done(null, userObj);
        } else {
          return done(null, false, req.flash('loginMessage', "Incorrect login credentials!"));
        }
      } else {
        return done(null, false, req.flash('loginMessage', "Incorrect login credentials!"));
      }
    }
  );
}));
