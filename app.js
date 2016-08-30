var express        = require('express');
var app            = express();
var environment    = app.get('env');
var PORT          = process.env.PORT || 3000;
var router         = require('./config/routes');
var pug            = require('pug');


app.use('/', router);
app.set('view engine', 'pug');

app.set('port', (process.env.PORT || 3000));
app.set('views', __dirname +'/views');

app.use(express.static(__dirname + '/public'));


// Listen for incoming HTTP requests
app.listen(process.env.PORT || 3000, function() {
  console.log("Express is listening on port " + PORT + ".");
});

module.exports = app;