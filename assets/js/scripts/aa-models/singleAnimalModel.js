console.log("singleFlowerModel");


// Namespace our app
// || veut dire "OR"
var app = app || {};

//Création d'une variable
app.singleFlower = Backbone.Model.extend({

//Chaque instance de modèles auront leurs propres propriétés
  defaults: {
    color: "pink",
    img: "images/placeholder.jpg"
  }

  /*
  initialize: function() {
    console.log("A model instance named " + this.get("name") +  " has been created and it costs " + this.get("price"));
  
    // Cut and paste this inside our initialize method
    //Cela permet d'écouter les changements du modèle ?
    // Modèle : les fleurs
    this.on('change', function(){
      console.log("Something in our model has changed");
    });

    // Cut and paste this inside our initialize method
    //Création d'une fonction, qui, à chaque fois que le prix change, va, va afficher le nom de l'instance du modèle, et le prix modifié
    // La fonction sera appelée à chaque fois que le modèle est modifié
    this.on('change:price', function(){
      console.log("The price for the " + this.get("name") + " model just changed to $" + this.get("price") + " dollars");
    });

  }*/

});

