var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/doCalc',function(req, res, next){
    var ReqQuestion = req.body.question;
    var APIanswer = eval(ReqQuestion);
    res.send({'APIanswer': APIanswer});
});

module.exports = router;

