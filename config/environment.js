var os = require('os');

var DEV_HOSTS = ["charlesyeh-mbp.corp.dropbox.com"];

exports.isProd = function() {
  return DEV_HOSTS.indexOf(os.hostname()) == -1;
};
