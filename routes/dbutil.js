var dbutil={};
var mysql = require('mysql');
var connection = mysql.createConnection({
host     : 'localhost',
user     : 'root',
password : 'root',
database : 'gyl'
});
function dbInit(){
	if(connection==null || typeof(connection)=="undefined"){
		var connection = mysql.createConnection({
			host     : 'localhost',
			user     : 'root',
			password : 'root',
			database : 'gyl'
		});
		next();
	}else{
		next();	
	}
}
function getConnection(){
	dbInit();
	connection.connect();
	return connection;
}
module.exports = dbutil;