// Une collection est un groupe d'instances de modèles
var app = app || {};

app.AnimalsCollection = Backbone.Collection.extend({

  url: 'PolygonalAnimalsApi.com/public/polygonalanimals',
  model:app.singleAnimal

});
