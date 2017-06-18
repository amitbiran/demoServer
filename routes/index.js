var express = require('express');
var mysql = require('mysql');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });// display the index html file
});

router.post('/table', function(req, res, next) {
  console.log("yeya");//happens when i click the button
    console.log(req.body);
//////////////////////////write logic for when button clicked here

//    var name = 'Amy';
   // var adr = 'Mountain 21';
  //  var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
    //con.query(sql, [name, adr], function (err, result)

  var dataToSend;
    var textRequest="SELECT * FROM moboTable WHERE age > '0'";
if(req.body.name!='') {
    console.log("txtbox")
    textRequest = "SELECT * FROM moboTable WHERE name =" + "'"+ req.body.name +"'";
}
    if (req.body.male != '') {
        textRequest += "AND gender = 'Male'";
    }
    if (req.body.female != '') {
        textRequest += "AND gender = 'female'";
    }
    if (req.body.above30 != '') {
        textRequest += "AND age > '30'";
    }
    if (req.body.under30 != '') {
        textRequest += "AND age < '30'";
    }





    var con = mysql.createConnection({
        host: "localhost",
        user: "amitbiran",
        password: "123456",
        database: "mydb"
    });

    con.connect(function(err) {
        if (err) throw err;
        con.query(textRequest, function (err, result) {
            if (err) throw err;

         //   dataToSend=JSON.stringify(result);
            dataToSend=result;
            console.log(dataToSend);
            res.send(dataToSend);
        });
    });







//////////////////////////write logic for when button clicked here
//res.sendData(dataToSend);

    //res.render('index', { title:dataToSend});// display the index html file

});



module.exports = router;






