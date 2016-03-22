<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Projet PHP + JS</title>
  <link rel="stylesheet" href="css/import.min.css">
</head>

<body>

  <div class="msg"><a href="#creators">Voir les Creators</a> | <a href="#animals">Voir les Animals</a></div>

  <div class="site">

    <div class="logo">  
      <p>Polygon Animals Shop</p>
    </div>

    <div id="allFlowers"></div>

    <div id="allCreators"></div>

    <div class="form-container">   

      <form action="#" class="form form-creator-create">
             Name: <input type="text" name="name" name="name"><br>
             Phone: <input type="text" name="phone" name="phone"><br>
            <button class="save">Edit</button>
            <button class="cancel">Cancel</button>
        </form>

        <form action="#" class="form form-creator-update">
             Id: <input type="text" name="id" name="id"><br>
             Name: <input type="text" name="name" name="name"><br>
             Phone: <input type="text" name="phone" name="phone"><br>
            <button class="save">Update</button>
            <button class="cancel">Cancel</button>
        </form>

        <form action="#" class="form form-creator-delete">
             Id: <input type="text" name="id" name="id"><br>
            <button class="save">Delete</button>
            <button class="cancel">Cancel</button>
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

    <script id="flowerElement" type="text/template">
      <% _.each(Objects, function(data) { %>
          <a href="#<%= data.link %>"><img src="<%= data.img %>" alt="<%= data.name %>" class="image" /></a>
        <ul>
          <li class="flowerInfo"><strong>Name:</strong> <%= data.name %></li>
          <li class="flowerInfo"><strong>Price:</strong> <%= data.price %></li>
          <li class="flowerInfo"><strong>Color:</strong> <%= data.color %></li>
        </ul>
      <% }); %>
    </script>

  <script id="creatorElement" type="text/template">
      <ul>
        <li class="creatorInfo"><strong>Name:</strong> <%= name %></li>
        <li class="creatorInfo"><strong>Phone:</strong> <%= phone %></li>
      </ul>
    </script>

  <script src="include/js/lib/vendor.min.js"></script>
  <script src="include/js/scripts/scripts.min.js"></script>

  <h1>LOLILOL</h1>

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