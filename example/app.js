var app = require('express-easy')();
var routes = require('./routes');

app.addRoute.get('/', routes.home);
app.addRoute.get('/hello', routes.hello);

app.enableRouting('/');
module.exports = app;
