var mysql = require('mysql');

var environment = require('./environment.js');

var HOST;
var USER;
var PASS;

if (environment.isProd()) {
  HOST = '';
  USER = '';
  PASS = '';
} else {
  HOST = 'localhost';
  USER = 'root';
  PASS = 'root';
  DATABASE = 'mentors';
}

var conn = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASS,
  database: DATABASE,
});

conn.connect();

exports.query = function(query, callback) {
  conn.query(query, callback);
};

exports.paramQuery = function(query, param, callback) {
  conn.query(query, param, callback);
};
