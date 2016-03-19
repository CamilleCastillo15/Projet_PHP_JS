//console.log("singleCreator");


// Namespace our app
// || veut dire "OR"
var app = app || {};

//Création d'une variable
app.singleCreator = Backbone.Model.extend({

  urlRoot: 'http://localhost/dev/PolygonalAnimalsApi_2/public/creators',
		/*url: function() {
			return this.urlRoot;
		},*/
		defaults: {
			link: "test",
			img: "images/placeholder.jpg",
		    name:  "defaults",
		    phone: "defaults"
		  },

  initialize: function() {
     console.log("A model instance named " + this.get("name") +  " has been created and it costs " + this.get("phone"));
   
     // Cut and paste this inside our initialize method
     //Cela permet d'écouter les changements du modèle ?
     // Modèle : les fleurs
     this.on('change', function(){
       console.log("Something in our model has changed");
     });
 
   }

});

