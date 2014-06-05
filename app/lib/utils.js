// Application-specific utilities
// ------------------------------

// Delegate to Chaplin’s utils module.
var utils = Chaplin.utils.beget(Chaplin.utils);

String.prototype.format = function() {
    var args = arguments;

    return this.replace(/\{(\d+)\}/g, function() {
        return args[arguments[1]];
    });
};

 _.extend(utils, {
   eflLink: function(eflDoc) {
      var linkURL = '/EFL2/USER/userIdentifyGoto.do?pid={0}&pyear={1}&LEVEL1={2}&key={3}';
      var eflURL = 'http://abonnes.efl.fr/portail/redirect.do?url={0}';

      var doc = eflDoc || {product:'',vintage:'',paragraph:'',memento:''};
      var tmpUrl = linkURL.format(doc.product, doc.vintage, doc.paragraph, doc.memento);
      tmpUrl = encodeURIComponent(tmpUrl);
      var url = eflURL.format(tmpUrl);

      return url;
   }
 });

// Prevent creating new properties and stuff.
if (typeof Object.seal === 'function') Object.seal(utils);

module.exports = utils;
