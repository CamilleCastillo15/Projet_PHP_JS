console.log("routes");

// Namespace our flowerApp
var app = app || {};

//Création d'un routeur
//Sur le modèle clé / valeur
//La route est sur la gauche
app.Router = Backbone.Router.extend({

	routes :{
	  //Définit une route pour index.html
	  //La méthode noCopy sera appelée
	  "": "noCopy",
	  //Les méthodes appelées pour :
	  //#heirloomRose, #rainbowRose, #redRose
	  "heirloomRose" : "heirloomRoseMessage",
	  "rainbowRose": "rainbowRoseMessage",
	  "redRose" : "redRoseMessage"
	},

	noCopy: function() {
  	  $("#copy").html("");
	},

	heirloomRoseMessage: function() {
	  $("#copy").html("Heirloom Roses are great Mother's Day flowers");
	},

	rainbowRoseMessage: function() {
	  $("#copy").html("Choose Rainbow Roses for your wedding");
	},

	redRoseMessage: function() {
	  $("#copy").html("On Valentine's Day, give that special someone Red Roses");
	}

});