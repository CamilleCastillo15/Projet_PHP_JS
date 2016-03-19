console.log("singleAnimalModel");


// Namespace our app
// || veut dire "OR"
var app = app || {};

//Création d'une variable
app.creators = Backbone.Model.extend({

  urlRoot: 'http://localhost:8888/PolygonalAnimalsApiDebug.com/public/creators'

});

