var View = require('views/base/view');

module.exports = View.extend({
  container: 'body',
  id: 'site-container',
  regions: {
    header: '#header-container',
    main: '#page-container',
    footer: '#footer-container'
  },
  template: require('./templates/site')
});
