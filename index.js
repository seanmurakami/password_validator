var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
var router = express.Router();

router.get('/',function(req,res){
  res.json({"error" : false, "message" : "Hello !"});
});

router.post('/add',function(req,res){
  res.json({"error" : false, "message" : "success", "data" : req.body.num1 + req.body.num2});
});

router.post('/login', function(req, res, next){
  if (!req.body.email) {
    res.send("Please input an email address")
  }
  if (req.body.password.length < 8) {
    res.send("Please make sure your password contains at least 8 characters")
  }
  if (!/[A-Z]/.test(req.body.password)) {
    res.send("Please make sure your password contains at least one capital letter")
  }
  if (!/[0-9]/.test(req.body.password)) {
    res.send("Please make sure your password contains at least one number")
  }
  res.json({"error": false, "message" : "success", "data" : `email: ${req.body.email} and password: ${req.body.password}`})
})

app.use('/',router);

app.listen(3000,function(){
  console.log("I am listening at PORT 3000");
})
