//console.log("singleAnimalModel");

// Namespace our app
// || veut dire "OR"
var app = app || {};

//Création d'une variable
app.singleAnimal = Backbone.Model.extend({

urlRoot: 'http://localhost:8888/PolygonalAnimalsApiDebug.com/public/polygonalanimals',

parse: function(response) {

       var values = response.data;
       return values;
  },
  
  initialize: function() {

    //Cela permet d'écouter les changements du modèle 
    this.on('change', function(){
    });

    // Création d'une fonction, qui, à chaque fois que le prix change, 
    // va afficher le nom de l'instance du modèle, et le prix modifié
    // La fonction sera appelée à chaque fois que le modèle est modifié
    this.on('change:price', function(){ 

    });

  }

});

