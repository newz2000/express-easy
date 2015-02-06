var appRoot = require('app-root-path');
var _ = require('underscore');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');

var defaultConfig = {
  sessionSecret: false,
  sessionEngine: false,
  cssPreProcessor: 'less',
  templateEngine: 'hbs'
};

var config = {};

var app;

var enableErrorHandler = function() {
  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
  });

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
      app.use(function(err, req, res, next) {
          res.status(err.status || 500);
          res.render('error', {
              message: err.message,
              error: err
          });
      });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
          message: err.message,
          error: {}
      });
  });

}

var registerHandler = function(patialName, cb) {

}

module.exports = function(localConfig) {

  if(!localConfig) {
    localConfig = {};
  }

  config = _.extend(config, localConfig);

  if(!_.has(config, 'appRoot')) {
    config.appRoot = appRoot.path;
  }

  app = express();

  // view engine setup
  app.set('views', path.join(config.appRoot, 'views'));
  app.set('view engine', 'hbs');

  // uncomment after placing your favicon in /public
  //app.use(favicon(config.appRoot + '/public/favicon.ico'));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(require('less-middleware')(path.join(config.appRoot, 'public')));
  app.use(express.static(path.join(config.appRoot, 'public')));

  app.enableErrorHandler = enableErrorHandler;

  return app;
}
