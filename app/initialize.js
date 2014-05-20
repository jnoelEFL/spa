var Application = require('application');
var routes = require('routes');

$(function() {
  return new Application({
    title: 'Simulateur example application',
    controllerSuffix: '-controller',
    routes: routes
  });
});
