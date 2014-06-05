var Application = require('application');
var routes = require('routes');

/*
* Lors de l'initialisation de l'application on initialise les propriétés de la fonction de formatage
*/
$(function() {
  accounting.settings = {
  currency: {
    symbol : '€',   // default currency symbol is '$'
    format: '%v', // controls output: %s = symbol, %v = value/number (can be object: see below)
    decimal : '.',  // decimal point separator
    thousand: ' ',  // thousands separator
    precision : 0   // decimal places
  },
  number: {
    precision : 0,  // default precision on numbers is 0
    thousand: ' ',
    decimal : '.'
  }
};

  return new Application({
    title: 'Simulateur example application',
    controllerSuffix: '-controller',
    routes: routes,
    pushState: false
  });
});
