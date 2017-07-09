/**
 * Created by pratyush on 9/7/17.
 */
var dbconfig={
    host : 'localhost',
    user:'praty',
    password : 'password',
    database : 'newdb'
};

var mysql=require('mysql');
function gettodolist(obj) {
    var connection = mysql.createConnection(dbconfig);
    var t;
    console.log('sql DB connected');
    connection.connect();
    connection.query('SELECT * FROM todod',function (err,rows,fields) {
        if (err){throw err;}
        // console.log(rows);
        obj(rows);
        // console.log(fields);
        // return t;
    })
}

function updateTable(id,cb){
    var connection = mysql.createConnection(dbconfig);
    // var t;
    // console.log('sql DB connected');
    connection.connect();
    connection.query('UPDATE todod SET done=1 where id='+id,function (err,row,fields) {
        console.log('updated'+id);
        connection.query('SELECT * FROM todod',function (err,rows,fields) {
            if (err){throw err;}
            cb(rows);
        })
    });
}
module.exports={
    get: gettodolist,
    update:updateTable
};
