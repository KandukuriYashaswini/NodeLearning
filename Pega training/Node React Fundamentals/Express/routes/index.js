var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data=[
    {
      name: "yash",
      age: 20,
      salary: 50000
    },
    {
      name: "ram",
      age: 40,
      salary: 60000
    },
  ] 
  res.render('index', { title: 'Express', 
  myName: "yash",
  users: data
});
});

module.exports = router;
