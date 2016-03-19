console.log("singleCreatorView");

// Namespace our flowerApp
var app = app || {};

// The view for all the flowers
app.singleCreatorView = Backbone.View.extend({

  model: app.creators,
  template: _.template( $("#flowerElement").html() ),

    /*initialize: function() {
			this.template = _.template($('#creatorsTemplate').html());
			this.listenTo(this.model, 'change', this.render);
	},*/

  render: function(){
			var creatorTemplate = this.$el.html(this.template(this.model.attributes));
			this.$el.html(creatorTemplate);
    		return this;
	},


});