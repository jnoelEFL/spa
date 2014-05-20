var View = require('views/base/view');

module.exports = View.extend({
  autoRender: true,
  className: 'footer',
  tagName: 'footer',
  template: require('./templates/footer'),

  getTemplateData: function() {
    // Moment.js c'est que du bonheur…
    return { now: moment().format('dddd D MMMM YYYY')};
  }

});
