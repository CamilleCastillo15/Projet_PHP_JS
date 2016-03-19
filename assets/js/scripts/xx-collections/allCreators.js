//console.log("allAnimals");

// Une collection est un groupe d'instances de modèles

   
// Namespace our flowerApp
var app = app || {};

app.CreatorsCollection = Backbone.Collection.extend({

  model: app.singleCreator

});
