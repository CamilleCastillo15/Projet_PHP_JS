//console.log("allAnimalsView");

// Namespace our flowerApp
var app = app || {};

// The view for all the flowers
app.allAnimalsView = Backbone.View.extend({

  tagName: "section",

  render: function() {
      this.collection.each(this.addAnimal, this);
        return this;
  },

 addAnimal: function(animal) {
        var animalView = new app.singleAnimalView ({ model: animal });
        this.$el.append(animalView.render().el);
 }

});