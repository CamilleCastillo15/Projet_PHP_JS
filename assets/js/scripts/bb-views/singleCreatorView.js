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

  tagName: "article",
  className: "creatorListItem",

  template: _.template( $("#creatorElement").html() ),

/*  initialize: function() {
			this.template = _.template($('#creatorsTemplate').html());
			this.listenTo(this.model, 'change', this.render);
	},*/

  render: function(){
			var creatorTemplate = this.$el.html(this.template(this.model.attributes));
			this.$el.html(creatorTemplate);
    		return this;
	},


});