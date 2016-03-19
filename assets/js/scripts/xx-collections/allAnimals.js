//console.log("allAnimals");

// Une collection est un groupe d'instances de modèles

   
// Namespace our flowerApp
var app = app || {};

app.AnimalsCollection = Backbone.Collection.extend({

  model: app.singleAnimal

});
