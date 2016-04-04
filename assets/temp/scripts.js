//console.log("allAnimals");

// Une collection est un groupe d'instances de modèles

   
// Namespace our flowerApp
var app = app || {};

app.AnimalsCollection = Backbone.Collection.extend({

  url: 'http://localhost:8888/PolygonalAnimalsApiDebug.com/public/polygonalanimals',
  model:app.singleAnimal

});

//console.log("allAnimals");

// Une collection est un groupe d'instances de modèles

   
// Namespace our flowerApp
var app = app || {};

app.CreatorsCollection = Backbone.Collection.extend({

  model: app.singleCreator

});

//console.log("allAnimalsView");

// Namespace our flowerApp
var app = app || {};

// The view for all the flowers
app.allAnimalsView = Backbone.View.extend({

  url: 'http://localhost:8888/PolygonalAnimalsApiDebug.com/public/polygonalanimals',
  model:app.singleAnimal,

initialize: function() {
    this.model.fetch();
    this.model.bind('change', this.render, this);
  },

  model:app.singleAnimal,
  tagName: "section",

  render: function() {
      this.collection.each(this.addAnimal, this);
        return this;
  },

 addAnimal: function(animal) {
        var animalView = new app.singleAnimalView ({ model: animal });
        this.$el.append(animalView.render().el);
 }

});
//console.log("allCreatorsView");

// Namespace our flowerApp
var app = app || {};

// The view for all the flowers
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
//console.log("singleAnimalView");

// Namespace our flowerApp
var app = app || {};

// The view for a single model view, which is one flower
app.singleAnimalView = Backbone.View.extend({

url: 'http://localhost:8888/PolygonalAnimalsApiDebug.com/public/polygonalanimals',
model:app.singleAnimal,

initialize: function() {
    this.model.fetch();
    this.model.bind('change', this.render, this);
  },

//tagname définit le nom de la balise HTML dans lequelles les données vont être insérées
//className définit la classe du tagName (optionnel)
//tagName est aussi optionnel, mais Backbonne définira par défaut la balise div
  tagName: "article",
  className: "flowerListItem",

  //Indique la balise html où seront insérées les données (avec JQuery - plus rapide-)
  template: _.template( $("#flowerElement").html() ),

  //render construit les élémnts html
  //Elle récupère les données crées précedemment
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

  //Ajout au template, à la balise #allFlower est modifiée ?
  //balise article (référence)
  addBgColor: function() {
    this.$el.addClass("bgColorImage");
  },

  removeBgColor: function() {
    this.$el.removeClass("bgColorImage");
  }

});
//console.log("singleCreatorView");

// Namespace our flowerApp
var app = app || {};

// The view for all the flowers
app.singleCreatorView = Backbone.View.extend({

  url: 'http://localhost:8888/PolygonalAnimalsApiDebug.com/public/creators',
  model:app.singleCreator,

initialize: function() {
    this.model.fetch();
    this.model.bind('change', this.render, this);
  },

  tagName: "articleCreator",
  className: "creatorListItem",

  template: _.template( $("#creatorElement").html() ),

/*  initialize: function() {
			this.template = _.template($('#creatorsTemplate').html());
			this.listenTo(this.model, 'change', this.render);
	},*/

   render: function() {
    var JSON = this.model.toJSON();
    var creatorTemplate = this.template({Objects: JSON});
    this.$el.html(creatorTemplate);
    return this;
  },


});
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
        $("#allFlowers").hide();
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
  	  $("#allFlowers").hide();
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

	$("#allFlowers").hide();
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
	  $("#allFlowers").show();
	  $(".form-container").hide();
	  $(".form-container_2").hide();
	  $(".creators-buttons").hide();
	  $(".animal-buttons").show();

	  var animal = new app.singleAnimal();

	  var animalView = new app.singleAnimalView({ model: animal});

	  $("#allFlowers").html(animalView.render().el);

	},

	putAnimalPage: function(){

		$("#allFlowers").hide();
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
		$("#allFlowers").hide();
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
		$("#allFlowers").hide();
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
var app = app || {};

//Création d'une variable
app.AnimalsCreator = Backbone.Model.extend({

   urlRoot: 'http://localhost:8888/PolygonalAnimalsApiDebug.com/public/creators',

 initialize: function(options) {
    this.Creatorid = options.Creatorid;
    this.id = options.id;
    //this.set({'Creatorid': Creatorid});
  },

  url: function() {
    return 'http://localhost:8888/PolygonalAnimalsApiDebug.com/public/creators/' + this.Creatorid + '/polygonalanimals/' + this.id;
  },

  parse: function(response) {

       var values = response.data;
       return values;
  },

});

var app = app || {};

//Création d'une variable
app.AnimalsCreatorPut = Backbone.Model.extend({

   urlRoot: 'http://localhost:8888/PolygonalAnimalsApiDebug.com/public/creators',

 initialize: function(options) {
    this.id = options.id;
  },

  url: function() {
    return 'http://localhost:8888/PolygonalAnimalsApiDebug.com/public/creators/' + this.id + '/polygonalanimals/';
  },

  parse: function(response) {

       var values = response.data;
       return values;
  },

});

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


//console.log("singleCreator");


// Namespace our app
// || veut dire "OR"
var app = app || {};

//Création d'une variable
app.singleCreator = Backbone.Model.extend({

		/*defaults: {
			  name: "test",
			  phone: "00-00-00-00-00",
		  },*/

      urlRoot: 'http://localhost:8888/PolygonalAnimalsApiDebug.com/public/creators',

      parse: function(response) {
           //console.log("parse");
           //console.log(response,response.data,response.data[4]);
           var values = response.data;

            return values;
      },

  initialize: function() {
     //console.log("A model instance named " + this.get("name") +  " has been created and it's his phone " + this.get("phone"));

     this.on('change', function(){
       //console.log("Something in our model has changed");
     });

     //this.fetch();
 
   }

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
