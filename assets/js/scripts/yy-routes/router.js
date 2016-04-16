var app = app || {};

//Création d'un routeur
//Sur le modèle clé / valeur
//La route est sur la gauche
//La fonction appelée sur la droite
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
	  "delete-creator" : "deleteCreatorPage",
	  "identificationPage" : "identificationPage"
	},

//L'état du DOM au lancement du site
	initialize: function() {
        $(".form-container").hide();
        $(".form-auth").hide();
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

//L'état du DOM par défaut (sans route spécifiée)
	default: function() {
  	  $("#copy").html("");
  	  $("#allAnimals").hide();
  	  $("#allCreators").hide();
  	  $(".creators-buttons").hide();
  	  $(".animal-buttons").hide();
  	  $(".form-container").hide();
  	  $(".form-auth").hide();
  	  $(".form-creator-update").hide();
	  $(".form-creator-delete").hide();
	  $(".form-creator-create").hide();
	  $(".form-animal-update").hide();
	  $(".form-animal-delete").hide();
	  $(".form-animal-create").hide();
	},

//Ces 3 routes définissent un message qui va s'afficher quand l'utilisateur va cliquer sur un élément
//de type Polygonalanimal 
	wolfMessage: function() {
	  $("#copy").html("Heirloom Roses are great Mother's Day flowers");
	},

	owlMessage: function() {
	  $("#copy").html("Choose Rainbow Roses for your wedding");
	},

	pandaMessage: function() {
	  $("#copy").html("On Valentine's Day, give that special someone Red Roses");
	},

//Le JS de la route identificationPage (page d'identification)
	identificationPage: function(){

//Plusieurs balises sans rapport avec la page vont être cachées (grâce à .hide())
	$("#allAnimals").hide();
	$("#allCreators").hide();
	$(".form-container_2").hide();
	$(".form-auth").show();

//Le formulaire .form-auth va exécuter des actions quand l'utilisateur clique dessus
	$(".form-auth" ).submit(function( event ) {
	  
	 //Ses actions de bases (envoyer) vont être stoppées grâce à event.preventDefault();
	 event.preventDefault();

	 //Les valeurs rentrées par l'utilisateur (login et password) vont être récupérées
	  var login = $(".form-auth .login").val();
	  var password = $(".form-auth .pass").val();

	  //Valeur
	  // var name = $(".form-creator-create .name").val();
	  // var phone = $(".form-creator-create .phone").val();

//Une fonction va être crée : elle permet d'envoyer des reqrêtes de type xhr = XmlHttpRequest
//Elles permettent de placer des données en Entête de requête
//Le but ici est de s'identifier grâce au service Basic auth crée sur Laravel (dans mon cas)
	  sendAuthentication = function (xhr) {
		  var user = login;// your actual username
		  var pass = password;// your actual password
		  var token = user.concat(":", pass);
		  xhr.setRequestHeader('Authorization', ("Basic ".concat(btoa(token))));
		}

//Pour envoyer une requête avec Backbone il faut aussi créer un modèle "fantôme"
		  var newAuth = new app.singleCreator({

		  	name:"test",
		  	phone:9999

		  });

//Le paramètre beforeSend permettra de passer les paramètres de la requête
		  newAuth.save(null, {

		  	beforeSend: sendAuthentication,

//Si la requête est passée, un message va être retourné
		  	success: function() {
			        alert("Vous êtes identifié.");
			      },

//Sinon le message d'erreur renvoyé par le serveur sera affiché	  
			  error: function(model, response) {
		        alert(response.responseText);
		      }

		  });

		
		});

	},

//La fonction de la page creatorPage
//Elle permet d'afficher les éléments de type Creators
	creatorPage: function() {

	$("#allAnimals").hide();
  	$("#allCreators").show();
  	$(".form-container").hide();
  	$(".form-auth").hide();
  	$(".form-container_2").hide();
  	$(".animal-buttons").hide();
  	$(".creators-buttons").show();

//Pour cela il faut créer un modèle de type singleCreator
//qui permet d'interroger la bonne URl et de récupérer les informations
	var creator = new app.singleCreator();

//Ensuite une vue sera crée, qui prendra pour modèle creator précédemment instancié
	var creatorView = new app.singleCreatorView({ model: creator});

//La balise allCreators récupera les données de la vue qui vont être crées
	$("#allCreators").html(creatorView.render().el);

	},

//La fonction de la page creatorPage
//Elle permet d'afficher les éléments de type Animals
	animalPage: function() {

	  $("#allCreators").hide();
	  $("#allAnimals").show();
	  $(".form-container").hide();
	  $(".form-auth").hide();
	  $(".form-container_2").hide();
	  $(".creators-buttons").hide();
	  $(".animal-buttons").show();

	  var animal = new app.singleAnimal();

	  var animalView = new app.singleAnimalView({ model: animal});

	  $("#allAnimals").html(animalView.render().el);

	},

//La fonction de la page putAnimalPage
//Elle permet de créer des éléments de type Animals
	putAnimalPage: function(){

		$("#allAnimals").hide();
		$(".form-container_2").show();
		$(".form-auth").hide();
		$(".form-animal-update").hide();
		$(".form-animal-delete").hide();
		$(".form-animal-create").show();

		$(".form-animal-create" ).submit(function( event ) {

		  event.preventDefault();

		  //Creatorid représente l'id du Creator associé à l'Animal
		  //Car chaque Animal a un Creator associé.
		  //Creatorid est donc la clé étrangère permettant de relier 
		  //l'Animal au Creator
		  var Creatorid = $(".form-animal-create .creatorId").val();
		  var color = $(".form-animal-create .color").val();
  		  var price = $(".form-animal-create .price").val();

  		  var newAnimal = new app.AnimalsCreatorPut({

  		  	id:Creatorid, 
			color:color,
			price:price

		});

			  newAnimal.save(null ,{

			  	type: 'POST',
			  	 success: function () {
				    alert('L\'animal a été crée.');
				  },
				  
				  error: function(model, response) {
			        alert(response.responseText);	      

				}


			  });

			
			});

		},

//updateAnimalPage permet de mettre à jour des informations sur un Animal
	updateAnimalPage: function(){

		$(".animal-buttons").hide();
		$("#allAnimals").hide();
		$(".form-container_2").show();
		$(".form-auth").hide();
		$(".form-animal-update").show();
		$(".form-animal-delete").hide();
		$(".form-animal-create").hide();

		$(".form-animal-update" ).submit(function( event ) {

			  //alert( "Handler for .submit() called." );
			  event.preventDefault();

			  var animalId = $(".form-animal-update .animalId").val();
			  var creatorId = $(".form-animal-update .creatorId").val();
			  var color = $(".form-animal-update .color").val();
			  var price = $(".form-animal-update .price").val();

			  var newAnimal = new app.AnimalsCreator({
			  	Creatorid:creatorId, 
			  	id:animalId, 
				color:color,
				price:price});

			  newAnimal.save(null, {

			  	 success: function () {
				    alert('L\'animal a été mis à jour.');
				  },
				  
				  error: function(model, response) {
			        alert(response.responseText);
			      }

			  
			  });

			
			});
		
		},

//deleteAnimalPage permet de détruire un élément Animal
	deleteAnimalPage: function(){

		$(".animal-buttons").hide();
		$("#allAnimals").hide();
		$(".form-container_2").show();
		$(".form-auth").hide();
		$(".form-animal-update").hide();
		$(".form-animal-delete").show();
		$(".form-animal-create").hide();

		$(".form-animal-delete" ).submit(function( event ) {

			  event.preventDefault();

			  var animalId = $(".form-animal-delete .animalId").val();
			  var creatorId = $(".form-animal-delete .creatorId").val();

			  var newAnimal = new app.AnimalsCreator({

			  	id: animalId,
			  	Creatorid: creatorId

			  });

			  newAnimal.destroy({

			  	 success: function() {

				    alert('This animal has been deleted.');

				  },
				  
				  error: function(model, response) {

			        alert(response.responseText);

			      }

			  });
		  
		});
		
	},

//putCreatorPage permet de créer un élément Creator
	putCreatorPage: function(){

		$("#allCreators").hide();
		$(".form-container_2").hide();
		$(".form-auth").hide();
		$(".form-container").show();
		$(".form-creator-update").hide();
		$(".form-creator-delete").hide();
		$(".form-creator-create").show();

		$(".form-creator-create" ).submit(function( event ) {
		  //alert( "Handler for .submit() called." );
		  event.preventDefault();

		  var name = $(".form-creator-create .name").val();
		  var phone = $(".form-creator-create .phone").val();
		  alert(phone);

		  var newCreator = new app.singleCreator({

		  	name:name,
		  	phone:phone

		  });

		  newCreator.save(null, {


		  		  success: function () {
				    alert('Le creator a été crée.');
				  },
				  
				  error: function(model, response) {
			        alert(response.responseText);
			      }

		  	});
		  
		});
	},

//updateCreatorPage permet de mettre à jour un élément Creator
	updateCreatorPage: function(){

		$("#allCreators").hide();
		$(".form-container").show();
		$(".form-container_2").hide();
		$(".form-auth").hide();
		$(".form-creator-create").hide();
		$(".form-creator-delete").hide();
		$(".form-creator-update").show();

		$(".form-creator-update" ).submit(function( event ) {

			  //alert( "Handler for .submit() called." );
			  event.preventDefault();

			  var id = $(".form-creator-update .id").val();
			  var name = $(".form-creator-update .name").val();
			  var phone = $(".form-creator-update .phone").val();

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
			        alert(response.responseText);
			      }

		  	});
		  
		});
		
	},

//deleteCreatorPage permet de détuire un élément Creator
	deleteCreatorPage: function(){

		$("#allCreators").hide();
		$(".form-container").show();
		$(".form-container_2").hide();
		$(".form-auth").hide();
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
				    alert('This creator has been deleted.');
				  },
				  
				  error: function(model, response) {
				  	//JSON.parse(response.responseText);
			        alert(response.responseText);
			      }

			  });
		  
		});
		
	}

});