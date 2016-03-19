console.log("singleCreator");


// Namespace our app
// || veut dire "OR"
var app = app || {};

//Création d'une variable
app.singleCreator = Backbone.Model.extend({

  urlRoot: 'http://localhost/dev/PolygonalAnimalsApi_2/public/creators',
		/*url: function() {
			return this.urlRoot;
		},*/
		defaults: {
		    "name":  "defaults",
		    "phone": "defaults"
		  }

});

