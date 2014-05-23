require('lib/view-helper');

module.exports = Chaplin.View.extend({
  // Allow passing `template` to View constructor so it will be saved
  // as a property on an instance.
  optionNames: Chaplin.View.prototype.optionNames.concat(['template']),

  getTemplateFunction: function(){
    return this.template;
  },

  initialize: function() {
    _.bindAll(this, 'render', 'afterRender');
  },
/*
  template: function() {},
  getRenderData: function() {},
*/
  render: function() {
    // Render stuff initially in parent class.
    Chaplin.View.prototype.render.apply(this, arguments);
    _.defer(this.afterRender);
   // return this;
  },

  afterRender: function() {},

  events: {
    'change input.monetaire': 'formatInput'
  },

  formatInput: function(e) {
    var input = $(e.currentTarget);
    var tmp = input.val();
    input.val(accounting.formatMoney(tmp));
  }
});
