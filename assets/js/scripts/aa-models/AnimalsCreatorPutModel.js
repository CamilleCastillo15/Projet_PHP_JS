var app = app || {};

//Création d'une variable
app.AnimalsCreatorPut = Backbone.Model.extend({

   urlRoot: 'http://localhost:8888/PolygonalAnimalsApiDebug.com/public/creators',

 initialize: function(options) {
    this.id = options.id;
  },

  url: function() {
    return 'http://localhost:8888/PolygonalAnimalsApiDebug.com/public/creators/' + this.id + '/polygonalanimals/';
  },

  parse: function(response) {

       var values = response.data;
       return values;
  },

});
