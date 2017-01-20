var express = require('express');
var path = require('path');
var app = express();

/*
app.get('/', function(req, res) {
  res.send('Hello World');
});


app.use(express.static(__dirname + '/public'));
console.log(__dirname);
*/

app.use(express.static(path.join(__dirname, 'public')));


app.listen(3003, function() {
  console.log('Node Server Ready!!!');
});
