<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
  <title>Projet PHP + JS</title>
  <link rel="stylesheet" href="css/import.min.css">
</head>

<body>

  <div class="site">

    <div class="logo">  
      <p>Polygon Animals Shop</p>
    </div>

    <div id="allFlowers"></div>

    <div id="copy"></div>

    <div id="creatorsTemplate" ></div>

  </div>  

<!-- id de script définit le nom définit dans la partie view ?
< % = référence la façon d'appeler le template underscore.js

-->
   <script id="flowerElement" type="text/template">
      <a href="#<%= link %>"><img src="<%= img %>" alt="<%= name %>" class="image" /></a>
      <ul>
        <li class="flowerInfo"><strong>Name:</strong> <%= name %></li>
        <li class="flowerInfo"><strong>Price:</strong> <%= price %></li>
        <li class="flowerInfo"><strong>Color:</strong> <%= color %></li>
      </ul>
    </script>

<!--  <script id="flowerElement" type="text/template">
    <a href="#<%= link %>"><img src="<%= img %>" alt="<%= name %>" class="image" /></a>
    <ul>
      <li class="flowerInfo">Name:<%= name %></li>
      <li class="flowerInfo">Price:<%= price %></li>
      <li class="flowerInfo">Color:<%= color %></li>
    </ul>
  </script> -->

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