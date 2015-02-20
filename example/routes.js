module.exports.home = function(req, res, next) {
  res.send('Hello World');
}

module.exports.hello = function(req, res, next) {
  res.send('World');
}