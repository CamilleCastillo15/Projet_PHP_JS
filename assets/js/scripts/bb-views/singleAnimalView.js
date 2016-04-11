var app = app || {};

//La vue pour un seul des Animals
app.singleAnimalView = Backbone.View.extend({

url: 'PolygonalAnimalsApi.com/public/polygonalanimals',
model:app.singleAnimal,

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
  tagName: "article",
  className: "animalListItem",

  //Indique la balise html où seront insérées les données (avec JQuery - plus rapide-)
  template: _.template( $("#animalElement").html() ),

  //render construit les élémnts html
  //Elle récupère les données crées précedemment
  //Les injecte dans le template sous forme d'objects de type JSON
  //$el ?
  render: function() {
    var JSON = this.model.toJSON();
    //console.log(JSON);
    var animalTemplate = this.template({Objects: JSON});
    this.$el.html(animalTemplate);
    return this;
  },

  //Evènements spécifiques à Backbone
  events: {
    'mouseover': 'addBgColor',
    'mouseout': 'removeBgColor'
  },

  //Le rendu du template est modifié
  //Les éléments voient leurs couleurs changer quand on leur passe la souris dessus
  addBgColor: function() {
    this.$el.addClass("bgColorImage");
  },

  removeBgColor: function() {
    this.$el.removeClass("bgColorImage");
  }

});