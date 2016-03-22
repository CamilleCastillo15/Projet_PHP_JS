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

