var express = require('express');
var router = express.Router();

/* GET home page. */
router
.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express' }
    );
})
.post('/setdata', async (request, response) => {
  console.log(request.body)
  response.end();
})

module.exports = router;