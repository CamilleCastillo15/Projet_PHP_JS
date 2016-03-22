//console.log("singleAnimalView");

// Namespace our flowerApp
var app = app || {};

// The view for a single model view, which is one flower
app.singleAnimalView = Backbone.View.extend({

url: 'http://localhost:8888/PolygonalAnimalsApiDebug.com/public/polygonalanimals',
model:app.singleAnimal,

initialize: function() {
    this.model.fetch();
    this.model.bind('change', this.render, this);
  },

//tagname définit le nom de la balise HTML dans lequelles les données vont être insérées
//className définit la classe du tagName (optionnel)
//tagName est aussi optionnel, mais Backbonne définira par défaut la balise div
  tagName: "article",
  className: "flowerListItem",

  //Indique la balise html où seront insérées les données (avec JQuery - plus rapide-)
  template: _.template( $("#flowerElement").html() ),

  //render construit les élémnts html
  //Elle récupère les données crées précedemment
  //$el ?
  render: function() {
    var animalTemplate = this.template(this.model.toJSON());
    this.$el.html(animalTemplate);
    return this;
  },

  //Evènements spécifiques à Backbone
  events: {
    'mouseover': 'addBgColor',
    'mouseout': 'removeBgColor'
  },

  //Ajout au template, à la balise #allFlower est modifiée ?
  //balise article (référence)
  addBgColor: function() {
    this.$el.addClass("bgColorImage");
  },

  removeBgColor: function() {
    this.$el.removeClass("bgColorImage");
  }

});