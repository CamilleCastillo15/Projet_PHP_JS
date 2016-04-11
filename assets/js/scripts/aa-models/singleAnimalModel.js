var app = app || {};

app.singleAnimal = Backbone.Model.extend({

//urlRoot définit la racine de l'URL interrogée dans ce modèle
urlRoot: 'PolygonalAnimalsApi.com/public/polygonalanimals',

//La fonction parse sélectionne les données JSON récupérées de l'URL
//Car elles sont encapsulées dans un tableau "data"
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

