// Une collection est un groupe d'instances de modèles
var app = app || {};

app.CreatorsCollection = Backbone.Collection.extend({

  model: app.singleCreator

});
