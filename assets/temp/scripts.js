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


console.log("allFlowerView");

// Namespace our flowerApp
var app = app || {};

// The view for all the flowers
app.allFlowersView = Backbone.View.extend({

  tagName: "section",

  render: function() {
      this.collection.each(this.addFlower, this);
        return this;
  },

 addFlower: function(flower) {
        var flowerView = new app.singleFlowerView ({ model: flower });
        this.$el.append(flowerView.render().el);
 }

});
console.log("singleFlowerView");

// Namespace our flowerApp
var app = app || {};

// The view for a single model view, which is one flower
app.singleFlowerView = Backbone.View.extend({

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
    var flowerTemplate = this.template(this.model.toJSON());
    this.$el.html(flowerTemplate);
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
console.log("allFlower");

// Une collection est un groupe d'instances de modèles

   
// Namespace our flowerApp
var app = app || {};

app.FlowersCollection = Backbone.Collection.extend({

  model: app.singleFlower

});

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
console.log("main");
$("#kk");

// 3 instances de fleurs sont crées 
// Toutes les instances de cet objet 
// vont avoir des propriétés spécifiques
// sauf par exemple rose arc - en - ciel qui aura li'mage

var redRoses = new app.singleFlower({
  name: "Red Roses",
  price: 39.95,
  color: "Red",
  img: "images/redRoses.jpg",
  link: "redRose"
});

var rainbowRoses = new app.singleFlower({
  name: "Rainbow Roses",
  price: 29.95,
  color: "orange",
  link: "rainbowRose"
});

var heirloomRoses = new app.singleFlower({
  name: "Heirloom roses",
  price: 19.95,
  img: "images/heirloomPinkRoses.jpg",
  link: "heirloomRose"
});

var flowerGroup = new app.FlowersCollection([
  redRoses, rainbowRoses, heirloomRoses
]);

var flowerGroupView = new app.allFlowersView({ collection: flowerGroup});

$("#allFlowers").html(flowerGroupView.render().el);

//Création d'une nouvelle instance de router 
//nommée flowerRouter
var flowerRouter = new app.Router();

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
