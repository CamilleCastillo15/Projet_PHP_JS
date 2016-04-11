<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8">
  <title>Projet PHP + JS</title>
  <link rel="stylesheet" href="css/import.min.css">
</head>

<body>

  <div class="msg"><a href="#identificationPage">S'identifier </a> </div>

  <div class="msg"><a href="#creators">Voir les Creators</a> | <a href="#animals">Voir les Animals</a></div>

  <div class="site">

    <div class="logo">  
      <p>Polygon Animals Shop</p>
    </div>

    <div id="allAnimals"></div>

    <div id="allCreators"></div>

      <div class="form-container-auth">   

        <form action="#" class="form form-auth" enctype="multipart/form-data">
               Login: <input type="text" name="login" class="login"><br>
               Pass: <input type="text" name="pass" class="pass"><br>
              <button class="save">Envoyer</button>
          </form>

      </div>

    <div class="form-container">   

      <form action="#" class="form form-creator-create">
             Name: <input type="text" name="name" class="name"><br>
             Phone: <input type="text" name="phone" class="phone"><br>
            <button class="save">Envoyer</button>
        </form>

        <form action="#" class="form form-creator-update">
             Id: <input type="text" name="id" class="id"><br>
             Name: <input type="text" name="name" class="name"><br>
             Phone: <input type="text" name="phone" class="phone"><br>
            <button class="save">Envoyer</button>
        </form>

        <form action="#" class="form form-creator-delete">
             Id: <input type="text" class="id" name="id"><br>
            <button class="save">Envoyer</button>
        </form>

      </div>

      <div class="form-container_2">   

        <form action="#" class="form form-animal-create">
             ID du Creator associé : <input type="text" name="creatorId" class="creatorId"><br>
             Color : <input type="text" name="color" class="color"><br>
             Price : <input type="text" name="price" class="price"><br>
            <button class="save">Envoyer</button>
        </form>

        <form action="#" class="form form-animal-update">
             ID du Creator associé : <input type="text" name="creatorId" class="creatorId"><br>
             ID de l'Animal : <input type="text" name="animalId" class="animalId"><br>
             Color : <input type="text" name="color" class="color"><br>
             Price : <input type="text" name="price" class="price"><br>
            <button class="save">Envoyer</button>
        </form>

        <form action="#" class="form form-animal-delete">
             ID du Creator associé : <input type="text" name="creatorId" class="creatorId"><br>
             ID de l'Animal : <input type="text" name="animalId" class="animalId"><br>
            <button class="save">Envoyer</button>
        </form>

      </div>

    <div class="button-container animal-buttons">
      <button class="button put" type="button"><a href="#put-animal">PUT</a></button>
      <button class="button update" type="button"><a href="#update-animal">UPDATE</a></button>
      <button class="button delete" type="button"><a href="#delete-animal">DELETE</a></button>
    </div>

    <div class="button-container creators-buttons">
      <button class="button put" type="button"><a href="#put-creator">PUT</a></button>
      <button class="button update" type="button"><a href="#update-creator">UPDATE</a></button>
      <button class="button delete" type="button"><a href="#delete-creator">DELETE</a></button>
    </div>

  </div>  

<!-- id de script définit le nom définit dans la partie view ?
< % = référence la façon d'appeler le template underscore.js
-->

<!--    <script id="flowerElement" type="text/template">
      <a href="#<%= link %>"><img src="<%= img %>" alt="<%= name %>" class="image" /></a>
      <ul>
        <li class="flowerInfo"><strong>Name:</strong> <%= name %></li>
        <li class="flowerInfo"><strong>Price:</strong> <%= price %></li>
        <li class="flowerInfo"><strong>Color:</strong> <%= color %></li>
      </ul>
    </script> -->

    <script id="animalElement" type="text/template">
      <% _.each(Objects, function(data) { %>
      <div class="AnimalEachElement">
            <a href="#<%= data.link %>"><img src="<%= data.img %>" alt="<%= data.name %>" class="image" /></a>
          <ul>
            <li class="animalInfo"><strong>Name:</strong> <%= data.name %></li>
            <li class="animalInfo"><strong>Price:</strong> <%= data.price %></li>
            <li class="animalInfo"><strong>Color:</strong> <%= data.color %></li>
            
          </ul>
        </div>
      <% }); %>
    </script>

    <script id="creatorElement" type="text/template">
      <% _.each(Objects, function(data) { %>
      <div class="CreatorEachElement">
          <ul>
            <li class="creatorInfo"><strong>Name:</strong> <%= data.name %></li>
            <li class="creatorInfo"><strong>Phone:</strong> <%= data.phone %></li>
          </ul>
        </div>
      <% }); %>
    </script>

  <script src="include/js/lib/vendor.min.js"></script>
  <script src="include/js/scripts/scripts.min.js"></script>

  <!-- <script src="js/libs/jquery.js"></script>
  <script src="js/libs/underscore.js"></script>
  <script src="js/libs/backbone.js"></script>
  <script src="js/models/singleFlowerModel.js"></script>
  <script src="js/views/singleFlowerView.js"></script>
  <script src="js/views/allFlowersView.js"></script>
  <script src="js/collections/allFlowers.js"></script>
  <script src="js/routes/router.js"></script>
  <script src="js/flowerApp.js"></script> -->

</body>
</html>