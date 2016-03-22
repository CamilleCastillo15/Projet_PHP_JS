//console.log("allAnimals");

// Une collection est un groupe d'instances de modèles

   
// Namespace our flowerApp
var app = app || {};

app.AnimalsCollection = Backbone.Collection.extend({

  url: 'http://localhost:8888/PolygonalAnimalsApiDebug.com/public/polygonalanimals',
  model:app.singleAnimal

});
