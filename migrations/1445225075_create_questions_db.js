var database = require('../config/database');

/*jshint multistr: true */
database.query("\
CREATE TABLE `questions` (\
  `id` int(11) NOT NULL AUTO_INCREMENT,\
  `question` TEXT NOT NULL,\
  `answer` TEXT NOT NULL,\
  PRIMARY KEY (`id`)\
) ENGINE=InnoDB DEFAULT CHARSET=latin1");
