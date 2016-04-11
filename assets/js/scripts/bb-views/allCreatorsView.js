var app = app || {};

// La vue pour tous les Creators
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