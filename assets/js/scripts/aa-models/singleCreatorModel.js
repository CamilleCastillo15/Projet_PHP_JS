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

