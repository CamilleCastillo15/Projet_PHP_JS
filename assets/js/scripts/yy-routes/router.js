//console.log("router");

// Namespace our flowerApp
var app = app || {};

//Création d'un routeur
//Sur le modèle clé / valeur
//La route est sur la gauche
app.Router = Backbone.Router.extend({

	routes :{
	  //Définit une route pour index.html
	  //La méthode noCopy sera appelée
	  "": "default",
	  //Les méthodes appelées pour :
	  //#heirloomRose, #rainbowRose, #redRose
	  "wolf" : "wolfMessage",
	  "owl": "owlMessage",
	  "panda" : "pandaMessage",
	  "creators" : "creatorPage",
	  "animals" : "animalPage",
	  "put-animal" : "putAnimalPage",
	  "update-animal" : "updateAnimalPage",
	  "delete-animal" : "deleteAnimalPage",
	  "put-creator" : "putCreatorPage",
	  "update-creator" : "updateCreatorPage",
	  "delete-creator" : "deleteCreatorPage"
	},

	initialize: function() {
        $(".form-container").hide();
        $(".form-creator-update").hide();
		$(".form-creator-delete").hide();
		$(".form-creator-create").hide();
    },

	default: function() {
  	  $("#copy").html("");
  	  $(".form-container").hide();
  	  $(".form-creator-update").hide();
	  $(".form-creator-delete").hide();
	  $(".form-creator-create").hide();
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

	//creator.fetch();

	//var creatorGroup = new app.CreatorsCollection(creator);
	//creatorsGroup.fetch();

	//var creatorGroupView = new app.allCreatorsView({ collection: creatorGroup});

	//("#allCreators").html(creatorGroupView.render().el);

	$("#allFlowers").hide();
  	$("#allCreators").show();
  	$(".form-container").hide();
  	$(".animal-buttons").hide();
  	$(".creators-buttons").show();

	var creator = new app.singleCreator();

	/*creator.fetch({
	    success: function (creator) {
	        alert(JSON.stringify(creator));
		    }

		});*/

	var creatorView = new app.singleCreatorView({ model: creator});

	$("#allCreators").html(creatorView.render().el);

	},

	animalPage: function() {

	  $("#allCreators").hide();
	  $("#allFlowers").show();
	  $(".form-container").hide();
	  $(".creators-buttons").hide();
	  $(".animal-buttons").show();

	  var animal = new app.singleAnimal();

	  /*animal.fetch({
	    success: function (animal) {
	        alert(JSON.stringify(animal));
		    }

		});*/

	  var animalView = new app.singleAnimalView({ model: animal});

	  $("#allFlowers").html(animalView.render().el);

	  /*animal.fetch({
	    success: function (animal) {
	        alert(JSON.stringify(animal));
		    }

		});*/

/*	  var animalGroup = new app.AnimalsCollection([
		  wolf, owl, panda
		]);*/

	  //var animalGroup = new app.AnimalsCollection(animal);

	  //var animalGroup = new app.AnimalsCollection([wolf, owl]);
	  //console.log(animalGroup);

	  /*var animalGroupView = new app.allAnimalsView({ model: animal});

	  $("#allFlowers").html(animalGroupView.render().el);*/

	},

	putAnimalPage: function(){

		$(".animal-buttons").hide();

	},

	updateAnimalPage: function(){

		$(".animal-buttons").hide();
		
	},

	deleteAnimalPage: function(){

		$(".animal-buttons").hide();
		
	},

	putCreatorPage: function(){

		$("#allCreators").hide();
		$(".form-container").show();
		$(".form-creator-update").hide();
		$(".form-creator-delete").hide();
		$(".form-creator-create").show();

		$(".form-creator-create" ).submit(function( event ) {
		  alert( "Handler for .submit() called." );
		  event.preventDefault();
		});
	},

	updateCreatorPage: function(){

		$("#allCreators").hide();
		$(".form-container").show();
		$(".form-creator-create").hide();
		$(".form-creator-delete").hide();
		$(".form-creator-update").show();
		
	},

	deleteCreatorPage: function(){

		$("#allCreators").hide();
		$(".form-container").show();
		$(".form-creator-create").hide();
		$(".form-creator-update").hide();
		$(".form-creator-delete").show();
		
	}

});