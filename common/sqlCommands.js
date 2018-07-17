//user_status单一的user_status表SQL-Command
var user_status = {
    insertOne:'INSERT INTO user_status (username, password,qrcode) VALUES(?,?,?)',
    userList:'select * from user_status',
    updateOne : 'update user_status set username = ?,password = ?,qrcode = ? where id = ? ',
    oneUserDetail : 'select * from user_status where id = ? '
};

//exports
module.exports = {
    user_status: user_status
};