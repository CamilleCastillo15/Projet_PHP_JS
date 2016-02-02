console.log("allFlower");

// Une collection est un groupe d'instances de modèles

   
// Namespace our flowerApp
var app = app || {};

app.FlowersCollection = Backbone.Collection.extend({

  model: app.singleFlower

});
