var View = require('views/base/view');
var Data = require('models/formData');

module.exports = View.extend({
  autoRender: true,
  className: 'home-page',
  template: require('./templates/home'),

/*
* Lors de l'init on charge un nouveau model de données
*/
  initialize: function() {
    this.data = new Data();
  },

/*
* Gestion des événements
*/
  events: {
    'change #idInput': 'changeInput'
  },

/*
* On update la vue dès que le model change
*/
  listen: {
    'change model': 'render'
  },

/*
* initialisation d'une variable contenant le model créé
*/
  formData: this.data,

/*
* On affecte les valeurs du model dans le template
*/
  getTemplateData: function() {
    return {
      montant: this.data.get('montant')
    };
  },

/*
* On initialise les tooltip après le chargement du DOM
*/
  afterRender: function () {
    this.$('#idLbl').tooltip({
        title: 'Ceci est un tooltip'
    });
  },

/*
* Function utilisé lors du render de la vue (selection d'un select par ex.)
*/
  render: function() {
    View.prototype.render.apply(this, arguments);
  },


/*
* Function appelé lors d'un événement
*/
  changeInput: function() {
    //this.render();
  }
});
