//create the map
var map = L.map("map", {
    center: [40.7128, -74.0059],
    zoom: 11
});

// add the tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
    "access_token={accessToken}", {
      accessToken: API_KEY,
      maxZoom:18
    }).addTo(map);

var link = "http://data.beta.nyc//dataset/0ff93d2d-90ba-457c-9f7e-39e47bf2ac5f/resource/" +
"35dd04fb-81b3-479b-a074-a27a37888ce7/download/d085e2f8d0b54d4590b1e7d1f35594c1pediacitiesnycneighborhoods.geojson";

// Grab the GeoJSON data
d3.json(link, function(data){
    // retrive data with a GeoJSON layer
    L.geoJSON(data).addTo(map);
});