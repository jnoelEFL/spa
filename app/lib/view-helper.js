var utils = require('./utils');

var register = function(name, fn) {
  return Handlebars.registerHelper(name, fn);
};

register('with', function(context, options) {
  if (!context || Handlebars.Utils.isEmpty(context)) {
    return options.inverse(this);
  } else {
    return options.fn(context);
  }
});

register('without', function(context, options) {
  var inverse = options.inverse;
  options.inverse = options.fn;
  options.fn = inverse;
  return Handlebars.helpers['with'].call(this, context, options);
});

register('url', function(routeName) {
  var params = [].slice.call(arguments, 1);
  var options = params.pop();
  return utils.reverse(routeName, params);
});

register('formatMonet', function(val) {
  return accounting.formatMoney(val);
});

register('formatMonetLabel', function(val) {
  return accounting.formatMoney(val, {
    symbol: '€',
    precision: 0,
    thousand: ' ',
    decimal: '.',
    format: '%v %s'
  });
});

register('select', function( value, options ){
  var $el = $('<select />').html( options.fn(this) );
  $el.find('option[value="' + value + '"]').attr({'selected':'selected'});
  return $el.html();
});
