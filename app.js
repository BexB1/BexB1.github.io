var express        = require('express');
var app            = express();
var environment    = app.get('env');
var port           = process.env.PORT || 3000;
var router         = require('./config/routes');
var pug            = require('pug');


app.use('/', router);
app.set('view engine', 'pug');

app.set('views', __dirname +'/views');

app.use(express.static(__dirname + '/public'));


// Listen for incoming HTTP requests
app.listen(port, function() {
  console.log("Express is listening on port " + port + ".");
});

module.exports = app;