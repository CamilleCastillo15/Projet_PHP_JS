var app = app || {};

// La vue pour tous les animaux
app.allAnimalsView = Backbone.View.extend({

//L'url interrogée ainsi que le modèle utilisé sont spécifiés
  url: 'PolygonalAnimalsApi.com/public/polygonalanimals',
  model:app.singleAnimal,

//initialize est aussi appelée au lancement de la vue
//Le modèle va se synchroniser avec les données en ligne avec la fonction fetch()
//La vue va se modifier quand un changement en ligne sera notifié
initialize: function() {
    this.model.fetch();
    this.model.bind('change', this.render, this);
  },

//La balise dans laquelle les données pourront être affichées se nommera "section"
  tagName: "section",

//Chaque objet de la collection sera ajoutée
  render: function() {
      this.collection.each(this.addAnimal, this);
        return this;
  },

  //Et affiché dans le template
   addAnimal: function(animal) {
          var animalView = new app.singleAnimalView ({ model: animal });
          this.$el.append(animalView.render().el);
   }

});