console.log("router");

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
	  "wolf" : "wolfMessage",
	  "owl": "owlMessage",
	  "panda" : "pandaMessage",
	  "creators" : "creatorPage",
	  "animals" : "animalPage"
	},

	noCopy: function() {
  	  $("#copy").html("");
	},

	wolfMessage: function() {
	  $("#copy").html("Heirloom Roses are great Mother's Day flowers");
	},

	owlMessage: function() {
	  $("#copy").html("Choose Rainbow Roses for your wedding");
	},

	pandaMessage: function() {
	  $("#copy").html("On Valentine's Day, give that special someone Red Roses");
	},

	creatorPage: function() {

	var creator = new app.singleCreator();
	creator.fetch();

	var creatorGroup = new app.CreatorsCollection(creator);
	//creatorsGroup.fetch();

	var creatorView = new app.singleCreatorView({ model: creator});
	var creatorGroupView = new app.allCreatorsView({ collection: creatorGroup});

	  $("#allFlowers").empty();
	  $("#allCreators").html(creatorGroupView.render().el);
	},

	animalPage: function() {

	  $("#allCreators").empty();

	  var animal = new app.singleAnimal();

	  var animalGroup = new app.AnimalsCollection([
		  wolf, owl, panda
		]);

	  var animalGroupView = new app.allAnimalsView({ collection: animalGroup});

	  $("#allFlowers").html(animalGroupView.render().el);
	}

});