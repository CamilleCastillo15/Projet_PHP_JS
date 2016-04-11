var app = app || {};

// La vue pour un seul des Creators
app.singleCreatorView = Backbone.View.extend({

  url: 'PolygonalAnimalsApi.com/public/creators',
  model:app.singleCreator,

//initialize est aussi appelée au lancement de la vue
//Le modèle va se synchroniser avec les données en ligne avec la fonction fetch()
//La vue va se modifier quand un changement en ligne sera notifié
initialize: function() {
    this.model.fetch();
    this.model.bind('change', this.render, this);
  },

//tagname définit le nom de la balise HTML dans laquelle les données vont être insérées
//className définit la classe du tagName (optionnel)
//tagName est aussi optionnel, mais Backbone définira par défaut la balise div
  tagName: "articleCreator",
  className: "creatorListItem",

//Indique la balise html où seront insérées les données (avec JQuery - plus rapide-)

  template: _.template( $("#creatorElement").html() ),

//render construit les élémnts html
//Elle récupère les données crées précedemment
//Les injecte dans le template sous forme d'objects de type JSON
//$el ?
   render: function() {
    var JSON = this.model.toJSON();
    var creatorTemplate = this.template({Objects: JSON});
    this.$el.html(creatorTemplate);
    return this;
  },


});