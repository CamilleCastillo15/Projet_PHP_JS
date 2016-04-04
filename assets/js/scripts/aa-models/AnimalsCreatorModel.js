var app = app || {};

//Création d'une variable
app.AnimalsCreator = Backbone.Model.extend({

   urlRoot: 'http://localhost:8888/PolygonalAnimalsApiDebug.com/public/creators',

 initialize: function(options) {
    this.Creatorid = options.Creatorid;
    this.id = options.id;
    //this.set({'Creatorid': Creatorid});
  },

  url: function() {
    return 'http://localhost:8888/PolygonalAnimalsApiDebug.com/public/creators/' + this.Creatorid + '/polygonalanimals/' + this.id;
  },

  parse: function(response) {

       var values = response.data;
       return values;
  },

});
