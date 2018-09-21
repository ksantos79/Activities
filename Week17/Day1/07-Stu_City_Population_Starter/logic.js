// Creating map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});


// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.high-contrast",
  accessToken: API_KEY
}).addTo(myMap);

// An array containing each city's name, location, and population
var cities = [
  {
    location: [40.7128, -74.0059],
    name: "New York",
    population: 8550405,
    color: "green"
  },
  {
    location: [41.8781, -87.6298],
    name: "Chicago",
    population: 2720546,
    color: "red"
  },
  {
    location: [29.7604, -95.3698],
    name: "Houston",
    population: 2296224,
    color: "blue"
  },
  {
    location: [34.0522, -118.2437],
    name: "Los Angeles",
    population: 3971883,
    color: "yellow"
  },
  {
    location: [41.2524, -95.9980],
    name: "Omaha",
    population: 446599,
    color: "orange"
  }
];

function addCommas(n){
  var n = parseFloat(n).toFixed()
  return Number(n).toLocaleString('en')
}

function markerSize(m){
  return m/40;
}



// Loop through the cities array and create one marker for each city, bind a popup containing its name and population and add it to the map
for (var i = 0; i < cities.length; i++) {
  // var city = cities[i];
  L.circle(cities[i].location,{
    fillOpacity: 0.75,
    color: 'white',
    fillColor: cities[i].color,
    radius: markerSize(cities[i].population)
  }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Population " + addCommas(cities[i].population) + "</h3>")
    .addTo(myMap);
}
for (var i = 0; i < cities.length; i++) {
  if (cities[i].population < 500000){
      L.marker(cities[i].location,{
        draggable: false
      }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Population " + addCommas(cities[i].population) + "</h3>")
        .addTo(myMap);

  }
}