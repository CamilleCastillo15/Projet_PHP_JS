// || veut dire "OR"
var app = app || {};

//Création d'une variable
app.AnimalsCreator = Backbone.Model.extend({

 //urlRoot: 'PolygonalAnimalsApi.com/public/creators',
 //La fonction initialize avec le paramètre options
 //permet ici de créer des variables qui peuvent être passées dans l'URL interrogée

initialize: function(options) {
    this.Creatorid = options.Creatorid;
    this.id = options.id;
  },

  //La fonction url spécifie l'url interrogée ainsi que l'emplacement des paramètres
  url: function() {
    return 'PolygonalAnimalsApi.com/public/creators/' + this.Creatorid + '/polygonalanimals/' + this.id;
  }

});
