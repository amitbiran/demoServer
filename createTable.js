var mysql=require('mysql');
var expect=require('expect');
var fs = require('fs');
var parse = require('csv-parse');








var con = mysql.createConnection({
    host: "localhost",
    user: "amitbiran",
    password: "123456",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE moboTable (name VARCHAR(21), gender VARCHAR(21), age VARCHAR(21), martial_state VARCHAR(21), profession VARCHAR(21))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});











var csvData=[];
fs.createReadStream('test-array.csv')
    .pipe(parse({delimiter: ','}))
    .on('data', function(csvrow) {
        console.log(csvrow);
        //do something with csvrow
        csvData.push(csvrow);
    })
    .on('end',function() {
        //do something wiht csvData
        console.log(csvData);
    });


 con = mysql.createConnection({
    host: "localhost",
    user: "amitbiran",
    password: "123456",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO moboTable (name , gender , age , martial_state , profession) VALUES ?";

    con.query(sql, [csvData], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});






