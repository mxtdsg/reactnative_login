var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'YOUR_PASSWORD',
    database: 'users',
    multipleResults : true
});

router.post('/login', function(req, res, next) {
  // res.send( {message: 'TEST: data from backend'} );
  // res.send( {message: req.body.username} );
  var username = req.body.username;
  var password = req.body.password;

  connection.query(
    "SELECT * FROM user WHERE username = ? AND password = ?",
    [username, password], function (err, row, field) {

        if (err) {
            console.log(err);
            res.send({ 'success': false, 'message': 'Could not connect to db' });
        }
        if (row.length > 0) {
            res.send({ 'success': true, 'user': row[0].username });
        } else {
            res.send({ 'success': false, 'message': 'User not found' });
        }
  });
});

// Register User
router.post('/register', function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    // var password2 = req.body.password2;

    var newuser = {
      username: username,
      password: password
    };

    var q = connection.query("INSERT INTO user SET ?", newuser, 
      function(err, row, field) {
          if (err) {
              console.error(err);
              res.send({ 'success': false, 'message': 'Error!' });
          } else {
              res.send({ 'success': true, 'message': 'User Created!' });
          }
    });
});

router.post('/table', function(req, res, next) {
  connection.query(
    "SELECT * FROM user",
    function (err, results) {
        if (err) {
            console.log(err);
            res.send({ 'success': false, 'message': 'Could not connect to db' });
        } else {
            res.send({ 'success': true, 'message': 'table', 'table': results });
        }
  });
});

module.exports = router;
