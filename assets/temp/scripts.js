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
    console.log(JSON);
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
    var creatorTemplate = this.template(this.model.toJSON());
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

	creator.fetch({
	    success: function (creator) {
	        alert(JSON.stringify(creator));
		    }

		});

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

	  animal.fetch({
	    success: function (animal) {
	        alert(JSON.stringify(animal));
		    }

		});

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
//console.log("singleAnimalModel");

// Namespace our app
// || veut dire "OR"
var app = app || {};

//Création d'une variable
app.singleAnimal = Backbone.Model.extend({

//Chaque instance de modèles auront leurs propres propriétés
/*  defaults: {
    link: "test",
    name: "lol",
    price: "4.5",
    color: "pink",
    img: "images/placeholder.jpg"
  },*/

urlRoot: 'http://localhost:8888/PolygonalAnimalsApiDebug.com/public/polygonalanimals',

parse: function(response) {
       //console.log(response,response.data,response.data[0].name,response.data[0].price);
       /*console.log(response.data);
       console.log(response.COLUMNS);*/

       var values = response.data;
       var animalArray = [{}];

       //console.log(response.data);

       for (var i = 1, length = values.length; i < 4; i++) {

          var animalArrayDetail_i = {};
          animalArrayDetail_i.link = response.data[i].link;
          animalArrayDetail_i.name = response.data[i].name;
          animalArrayDetail_i.price = response.data[i].price;
          animalArrayDetail_i.color = response.data[i].color;
          animalArrayDetail_i.img = response.data[i].img;
          //console.log(animalArrayDetail_i);
          animalArray.push(animalArrayDetail_i);
          
          //console.log(response.data[i]);

      }

      console.log(response.data);

       return values;


            /*console.log(i);
            console.log(response.data[i].price);

            var link = response.data[i].link;
            animalArrayDetail.push("link:"+link);

            var name = response.data[i].name;
            animalArrayDetail.push("name:"+name);

            var price = response.data[i].price;
            animalArrayDetail.push("price:"+price);

            var color = response.data[i].color;
            animalArrayDetail.push("color:"+color);

            var img = response.data[i].img;
            animalArrayDetail.push("img:"+img);

            animalArrayDetail.push(response.data[i]);*/
            //animalArray.push(animalArrayDetail);

         //}
       //console.log(animalArray);
       /*{
        link: response.data[4].link,
        name:response.data[4].name,
        price:response.data[4].price,
        color:response.data[4].color,
        img:response.data[4].img
      }*/
  },
  
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

  }

});


//console.log("singleCreator");


// Namespace our app
// || veut dire "OR"
var app = app || {};

//Création d'une variable
app.singleCreator = Backbone.Model.extend({

		defaults: {
			  name: "test",
			  phone: "00-00-00-00-00",
		  },

      urlRoot: 'http://localhost:8888/PolygonalAnimalsApiDebug.com/public/creators',

      parse: function(response) {
           //console.log("parse");
           //console.log(response,response.data,response.data[4]);
           return {
            name: response.data[4].name,
            phone:response.data[4].phone,
          }
      },

  initialize: function() {
     console.log("A model instance named " + this.get("name") +  " has been created and it's his phone " + this.get("phone"));

     this.on('change', function(){
       console.log("Something in our model has changed");
     });

     this.fetch();
 
   }

});


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
