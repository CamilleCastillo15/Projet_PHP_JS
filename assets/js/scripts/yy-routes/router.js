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
        $("#allAnimals").hide();
        $("#allCreators").hide();
        $(".creators-buttons").hide();
        $(".animal-buttons").hide();
        $(".form-creator-update").hide();
		$(".form-creator-delete").hide();
		$(".form-creator-create").hide();
		$(".form-animal-update").hide();
		$(".form-animal-delete").hide();
		$(".form-animal-create").hide();
    },

	default: function() {
  	  $("#copy").html("");
  	  $("#allAnimals").hide();
  	  $("#allCreators").hide();
  	  $(".creators-buttons").hide();
  	  $(".animal-buttons").hide();
  	  $(".form-container").hide();
  	  $(".form-creator-update").hide();
	  $(".form-creator-delete").hide();
	  $(".form-creator-create").hide();
	  $(".form-animal-update").hide();
	  $(".form-animal-delete").hide();
	  $(".form-animal-create").hide();
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

	$("#allAnimals").hide();
  	$("#allCreators").show();
  	$(".form-container").hide();
  	$(".form-container_2").hide();
  	$(".animal-buttons").hide();
  	$(".creators-buttons").show();

	var creator = new app.singleCreator();

	var creatorView = new app.singleCreatorView({ model: creator});

	$("#allCreators").html(creatorView.render().el);

	},

	animalPage: function() {

	  $("#allCreators").hide();
	  $("#allAnimals").show();
	  $(".form-container").hide();
	  $(".form-container_2").hide();
	  $(".creators-buttons").hide();
	  $(".animal-buttons").show();

	  var animal = new app.singleAnimal();

	  var animalView = new app.singleAnimalView({ model: animal});

	  $("#allAnimals").html(animalView.render().el);

	},

	putAnimalPage: function(){

		$("#allAnimals").hide();
		$(".form-container_2").show();
		$(".form-animal-update").hide();
		$(".form-animal-delete").hide();
		$(".form-animal-create").show();

		$(".form-animal-create" ).submit(function( event ) {
		  //alert( "Handler for .submit() called." );
		  event.preventDefault();

		  var id = $(".form-animal-create .creatorId").val();

		  var color = $(".form-animal-create .color").val();
  		  var price = $(".form-animal-create .price").val();

  		  var newAnimal = new app.AnimalsCreatorPut({id:id, 

			color:color,
			price:price});

			  newAnimal.save(null ,{

			  	type: 'POST',
			  	 success: function () {
				    alert(unescape(encodeURIComponent('L\'animal a été crée.')));
				  },
				  
				  error: function(model, response) {
			        alert(unescape(encodeURIComponent(response.responseText)));
			      }


			  });

			
			});

		},

	updateAnimalPage: function(){

		$(".animal-buttons").hide();
		$("#allAnimals").hide();
		$(".form-container_2").show();
		$(".form-animal-update").show();
		$(".form-animal-delete").hide();
		$(".form-animal-create").hide();

		$(".form-animal-update" ).submit(function( event ) {

			  //alert( "Handler for .submit() called." );
			  event.preventDefault();

			  var animalId = $(".form-animal-update .animalId").val();
			  alert(animalId);

			  var creatorId = $(".form-animal-update .creatorId").val();
			  alert(creatorId);

			  var color = $(".form-animal-update .color").val();
			  alert(color);

			  var price = $(".form-animal-update .price").val();
			  alert(price);

			  var newAnimal = new app.AnimalsCreator({
			  	Creatorid:creatorId, 
			  	id:animalId, 
				color:color,
				price:price});

			  newAnimal.save(null, {

			  	 success: function () {
				    alert('L\'animal a été crée.');
				  },
				  
				  error: function(model, response) {
			        alert(response.responseText);
			      }

			  
			  });

			
			});
		
		},

	deleteAnimalPage: function(){

		$(".animal-buttons").hide();
		$("#allAnimals").hide();
		$(".form-container_2").show();
		$(".form-animal-update").hide();
		$(".form-animal-delete").show();
		$(".form-animal-create").hide();
		
	},

	putCreatorPage: function(){

		$("#allCreators").hide();
		$(".form-container_2").hide();
		$(".form-container").show();
		$(".form-creator-update").hide();
		$(".form-creator-delete").hide();
		$(".form-creator-create").show();

		$(".form-creator-create" ).submit(function( event ) {
		  //alert( "Handler for .submit() called." );
		  event.preventDefault();

		  var name = $(".form-creator-create .name").val();
		  var phone = $(".form-creator-create .phone").val();

		  var newCreator = new app.singleCreator({

		  	name:name,
		  	phone:phone

		  });

		  newCreator.save(null, {


		  		  success: function () {
				    alert('Le creator a été crée.');
				  },
				  
				  error: function(model, response) {
			        alert(JSON.parse(response.responseText));
			      }

		  	});
		  
		});
	},

	updateCreatorPage: function(){

		$("#allCreators").hide();
		$(".form-container").show();
		$(".form-container_2").hide();
		$(".form-creator-create").hide();
		$(".form-creator-delete").hide();
		$(".form-creator-update").show();

		$(".form-creator-update" ).submit(function( event ) {

			  //alert( "Handler for .submit() called." );
			  event.preventDefault();

			  var id = $(".form-creator-update .id").val();
			  alert(id);

			  var name = $(".form-creator-update .name").val();
			  alert(name);

			  var phone = $(".form-creator-update .phone").val();
			  alert(phone);

			  var newCreator = new app.singleCreator({

			  	id: id,
			  	name:name,
			  	phone:phone

			  });

			  newCreator.save(null, {


		  		  success: function () {
				    alert('Le creator a été modifié.');
				  },
				  
				  error: function(model, response) {
			        alert(JSON.stringify(response.responseText));
			      }

		  	});
		  
		});
		
	},

	deleteCreatorPage: function(){

		$("#allCreators").hide();
		$(".form-container").show();
		$(".form-container_2").hide();
		$(".form-creator-create").hide();
		$(".form-creator-update").hide();
		$(".form-creator-delete").show();

		$(".form-creator-delete" ).submit(function( event ) {

			  event.preventDefault();

			  var id = $(".form-creator-delete .id").val();

			  var newCreator = new app.singleCreator({

			  	id: id

			  });

			  newCreator.destroy({

			  	 success: function () {
				    alert(JSON.parse('Le creator a été détruit.'));
				  },
				  
				  error: function(model, response) {
				  	//JSON.parse(response.responseText);
			        alert(decodeURIComponent(response.responseText));
			      }

			  });
		  
		});
		
	}

});