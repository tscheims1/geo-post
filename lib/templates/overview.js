var maps;
  Template.overview.helpers({
    posts: Posts.find(),
    maps:maps
  });
  
  Template.overview.rendered = function()
  {
     map = L.map('map').setView([59.91051252, 10.50659797], 3);
    var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osm = new L.TileLayer(osmUrl, {minZoom: 3, maxZoom: 8});   
    map.addLayer(osm);
  };
  
  Template.overview.events({
   "mouseenter .post-overview":function(event,template){
    console.log("hover");
       
   },
    "mouseleave .post-overview":function(event, template){
    console.log("hover out");  
    },
      
  });

  