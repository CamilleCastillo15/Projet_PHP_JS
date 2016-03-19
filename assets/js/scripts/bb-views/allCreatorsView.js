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