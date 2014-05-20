var Controller = require('controllers/base/controller');
var HeaderView = require('views/home/header-view');
var HomePageView = require('views/home/home-page-view');
var FooterView = require('views/home/footer-view');

module.exports = Controller.extend({
  beforeAction: function() {
    this.constructor.__super__.beforeAction.apply(this, arguments);
    this.reuse('header', HeaderView, {region: 'header'});
    this.reuse('footer', FooterView, {region: 'footer'});
  },

  index: function() {
    this.view = new HomePageView({region: 'main'});
  }

});
