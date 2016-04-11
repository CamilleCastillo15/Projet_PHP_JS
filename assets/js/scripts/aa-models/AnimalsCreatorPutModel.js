var app = app || {};

//Le modèle AnimalsCreatorPut permet de ne passer qu'un seul paramètre dans l'URL
//Dans le cas d'une requête PUT pour créer un Animal
app.AnimalsCreatorPut = Backbone.Model.extend({

  initialize: function(options) {

    this.id = options.id;

  },

  url: function() {

    return 'PolygonalAnimalsApi.com/public/creators/' + this.id + '/polygonalanimals';
  
  }

});
