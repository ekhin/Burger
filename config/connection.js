
var mysql = require('mysql');

var connection = mysql.createConnection({
	host     : 'us-cdbr-iron-east-01.cleardb.net',
  port     : 3306,
	user     : 'b0f1839e58144f',
	password : 'cf6cbb83', 
	database : 'heroku_f9fc61cb0a3c61b' 
});

// mysql://b0f1839e58144f:cf6cbb83@us-cdbr-iron-east-01.cleardb.net/heroku_f9fc61cb0a3c61b?reconnect=true

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId);
});

// Export the Connection
module.exports = connection;