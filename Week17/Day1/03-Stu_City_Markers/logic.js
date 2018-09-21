// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer to the map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.high-contrast",
  accessToken: API_KEY
}).addTo(myMap);

var cities = [{
  location: [40.71,-74.0059],
  name: "New York",
  population: "8,550,405"
},{
  location: [41.8781, -87.6298],
  name: "Chicago",
  population: "2,720,546"
},
{
  location: [29.7604, -95.3698],
  name: "Houston",
  population: "3,971,883"
},
{
  location: [41.2524, -95.9980],
  name: "Omaha",
  population: "446,599"
}]
// City markers
for (let index = 0; index < cities.length; index++){
  var city = cities[index];
  L.marker(city.location, {
    draggable: false,
    title: city.name
  })
    .bindPopup(`<h1>${city.name}</h1><hr><h3>${city.population}</h3>`)
    .addTo(myMap);  
}



// Add code to create a marker for each city below and add it to the map

// newyork;
// chicago;
// houston;
// la;
// omaha;
