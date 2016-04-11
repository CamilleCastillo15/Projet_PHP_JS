var app = app || {};

// La vue pour tous les animaux
app.allAnimalsView = Backbone.View.extend({

//L'url interrogée ainsi que le modèle utilisé sont spécifiés
  url: 'PolygonalAnimalsApi.com/public/polygonalanimals',
  model:app.singleAnimal,

//initialize est aussi appelée au lancement de la vue
//Le modèle va se synchroniser avec les données en ligne avec la fonction fetch()
//La vue va se modifier quand un changement en ligne sera notifié
initialize: function() {
    this.model.fetch();
    this.model.bind('change', this.render, this);
  },

//La balise dans laquelle les données pourront être affichées se nommera "section"
  tagName: "section",

//Chaque objet de la collection sera ajoutée
  render: function() {
      this.collection.each(this.addAnimal, this);
        return this;
  },

  //Et affiché dans le template
   addAnimal: function(animal) {
          var animalView = new app.singleAnimalView ({ model: animal });
          this.$el.append(animalView.render().el);
   }

});
var app = app || {};

// La vue pour tous les Creators
app.allCreatorsView = Backbone.View.extend({

  tagName: "section",

  render: function() {
      this.collection.each(this.addCreator, this);
        return this;
  },

 addCreator: function(creator) {
        var creatorView = new app.singleCreatorView ({ model: creator });
        this.$el.append(creatorView.render().el);
 }

});
var app = app || {};

//La vue pour un seul des Animals
app.singleAnimalView = Backbone.View.extend({

url: 'PolygonalAnimalsApi.com/public/polygonalanimals',
model:app.singleAnimal,

//initialize est aussi appelée au lancement de la vue
//Le modèle va se synchroniser avec les données en ligne avec la fonction fetch()
//La vue va se modifier quand un changement en ligne sera notifié
initialize: function() {
    this.model.fetch();
    this.model.bind('change', this.render, this);
  },

//tagname définit le nom de la balise HTML dans laquelle les données vont être insérées
//className définit la classe du tagName (optionnel)
//tagName est aussi optionnel, mais Backbone définira par défaut la balise div
  tagName: "article",
  className: "animalListItem",

  //Indique la balise html où seront insérées les données (avec JQuery - plus rapide-)
  template: _.template( $("#animalElement").html() ),

  //render construit les élémnts html
  //Elle récupère les données crées précedemment
  //Les injecte dans le template sous forme d'objects de type JSON
  //$el ?
  render: function() {
    var JSON = this.model.toJSON();
    //console.log(JSON);
    var animalTemplate = this.template({Objects: JSON});
    this.$el.html(animalTemplate);
    return this;
  },

  //Evènements spécifiques à Backbone
  events: {
    'mouseover': 'addBgColor',
    'mouseout': 'removeBgColor'
  },

  //Le rendu du template est modifié
  //Les éléments voient leurs couleurs changer quand on leur passe la souris dessus
  addBgColor: function() {
    this.$el.addClass("bgColorImage");
  },

  removeBgColor: function() {
    this.$el.removeClass("bgColorImage");
  }

});
var app = app || {};

// La vue pour un seul des Creators
app.singleCreatorView = Backbone.View.extend({

  url: 'PolygonalAnimalsApi.com/public/creators',
  model:app.singleCreator,

//initialize est aussi appelée au lancement de la vue
//Le modèle va se synchroniser avec les données en ligne avec la fonction fetch()
//La vue va se modifier quand un changement en ligne sera notifié
initialize: function() {
    this.model.fetch();
    this.model.bind('change', this.render, this);
  },

//tagname définit le nom de la balise HTML dans laquelle les données vont être insérées
//className définit la classe du tagName (optionnel)
//tagName est aussi optionnel, mais Backbone définira par défaut la balise div
  tagName: "articleCreator",
  className: "creatorListItem",

//Indique la balise html où seront insérées les données (avec JQuery - plus rapide-)

  template: _.template( $("#creatorElement").html() ),

//render construit les élémnts html
//Elle récupère les données crées précedemment
//Les injecte dans le template sous forme d'objects de type JSON
//$el ?
   render: function() {
    var JSON = this.model.toJSON();
    var creatorTemplate = this.template({Objects: JSON});
    this.$el.html(creatorTemplate);
    return this;
  },


});
// || veut dire "OR"
var app = app || {};

//Création d'une variable
app.AnimalsCreator = Backbone.Model.extend({

   //urlRoot: 'PolygonalAnimalsApi.com/public/creators',

 //La fonction initialize avec le paramètre options
 //permet ici de créer des variables qui peuvent être passées dans l'URL interrogée
 initialize: function(options) {
    this.Creatorid = options.Creatorid;
    this.id = options.id;
  },

  //La fonction url spécifie l'url interrogée ainsi que l'emplacement des paramètres
  url: function() {

    return 'PolygonalAnimalsApi.com/public/creators/' + this.Creatorid + '/polygonalanimals/' + this.id;
  
  }

});

var app = app || {};

//Le modèle AnimalsCreatorPut permet de ne passer qu'un seul paramètre dans l'URL
//Dans le cas d'une requête PUT pour créer un Animal
app.AnimalsCreatorPut = Backbone.Model.extend({

  initialize: function(options) {

    this.id = options.id;

  },

  url: function() {

    return 'PolygonalAnimalsApi.com/public/creators/' + this.id + '/polygonalanimals';
  
  }

});

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


var app = app || {};

//Création d'une variable
app.singleCreator = Backbone.Model.extend({

      urlRoot: 'PolygonalAnimalsApi.com/public/creators',

      parse: function(response) {

           var values = response.data;
            return values;
      },

  initialize: function() {

     console.log("A model instance named " + this.get("name") +  
      " has been created and it's his phone " + this.get("phone"));

     this.on('change', function(){
       console.log("Something in our model has changed");
     });
 
   }

});


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
// Une collection est un groupe d'instances de modèles
var app = app || {};

app.AnimalsCollection = Backbone.Collection.extend({

  url: 'PolygonalAnimalsApi.com/public/polygonalanimals',
  model:app.singleAnimal

});

// Une collection est un groupe d'instances de modèles
var app = app || {};

app.CreatorsCollection = Backbone.Collection.extend({

  model: app.singleCreator

});

//console.log("main");
$("#kk");

// 3 instances de fleurs sont crées 
// Toutes les instances de cet objet 
// vont avoir des propriétés spécifiques
// sauf par exemple rose arc - en - ciel qui aura li'mage

/*var wolf = new app.singleAnimal({
  name: "Polygon Wolf",
  price: 39.95,
  color: "Red",
  img: "images/wolf.svg",
  link: "wolf"
});

var owl = new app.singleAnimal({
  name: "Polygon Owl",
  price: 29.95,
  color: "orange",
  img: "images/owl.svg",
  link: "owl"
});

var panda = new app.singleAnimal({
  name: "Polygon Panda",
  price: 19.95,
  img: "images/panda.svg",
  link: "panda"
});*/

//$("#allFlowers").html(animalGroupView.render().el);

//$("#allCreators").html(creatorGroupView.render().el);

/*
var hello = new creatorsView({
      el: $('#creatorsTemplate').first(),
      model: creatorsModel
    });*/

//Création d'une nouvelle instance de router 
//nommée flowerRouter
var animalRouter = new app.Router();

$(".form-container").hide();
Backbone.history.start();


/*flowerGroup.add(heirloomRoses);
flowerGroup.remove(redRoses);

console.log(flowerGroup.toJSON());*/


/* console.log(heirloomRoses.toJSON());
console.log(rainbowRoses.toJSON());
console.log(redRoses.toJSON()); */


   // Change the price
   // Le modèle est modifié (son prix)
   // rainbowRoses.set('price', 20);
