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
     console.log("A model instance named " + this.get("name") +  " has been created and it's his phone " + this.get("phone"));

     this.on('change', function(){
       console.log("Something in our model has changed");
     });

     this.fetch();
 
   }

});

