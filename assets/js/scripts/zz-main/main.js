console.log("main");
$("#kk");

// 3 instances de fleurs sont crées 
// Toutes les instances de cet objet 
// vont avoir des propriétés spécifiques
// sauf par exemple rose arc - en - ciel qui aura li'mage

var wolf = new app.singleAnimal({
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
});
/*
var animalGroup = new app.AnimalsCollection([
  wolf, owl, panda
]);

var animalGroupView = new app.allAnimalsView({ collection: animalGroup});

$("#allFlowers").html(animalGroupView.render().el);*/

var creator = new app.singleCreator({id:1});
creator.fetch();

var creatorGroup = new app.CreatorsCollection();
//creatorsGroup.fetch();

var creatorView = new app.singleCreatorView({ model: creator});

$("#allFlowers").html(creatorView.render().el);

/*
var hello = new creatorsView({
      el: $('#creatorsTemplate').first(),
      model: creatorsModel
    });*/

//Création d'une nouvelle instance de router 
//nommée flowerRouter
var animalRouter = new app.Router();

//
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
