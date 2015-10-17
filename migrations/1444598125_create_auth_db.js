var database = require('../config/database');

/*jshint multistr: true */
database.query("\
CREATE TABLE `users` (\
   `id` int(11) NOT NULL AUTO_INCREMENT,\
    `username` varchar(127) NOT NULL,\
     `password` varchar(255) NOT NULL,\
      PRIMARY KEY (`id`)\
) ENGINE=InnoDB DEFAULT CHARSET=latin1");
