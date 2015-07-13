var express = require('express');
var app = express();

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});


app.get('/', function (req, res) {
  console.log(req.params);
  res.send('Hello asdfsdafWorld!');
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});