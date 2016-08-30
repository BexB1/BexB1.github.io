var express        = require('express');
var app            = express();
var environment    = app.get('env');
const PORT         = process.env.PORT || 3000;
var router         = require('./config/routes');
var pug            = require('pug');


app.use('/', router);

app.set('views', __dirname +'/views');
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));


// Listen for incoming HTTP requests
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

module.exports = app;