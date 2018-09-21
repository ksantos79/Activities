var newYorkCoords = [40.73, -74.0059];
var mapZoomLevel = 12;
var myMap = L.map("map-id", {
  center: newYorkCoords,
  zoom: mapZoomLevel
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 20,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);


url = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json'


d3.json(url, nydata => {
  finaldata = nydata.data.stations;
  // console.log("d3/finaldata: ",finaldata);

  createMap(finaldata);
});


// Create the createMap function
function createMap(bikestations) {
    var markers = L.markerClusterGroup();

    for (var i = 0; i < bikestations.length; i++) {
      var location = [ ,bikestations[i].lon];
      // console.log(location[1]);
      if(location) {
        // console.log("Location: ",location)
        markers.addLayer(L.marker([location[0], location[1]])
          .bindPopup(`<h3>${bikestations[i].name}</h3><hr><h3>Capacity:${bikestations[i].capacity}</h3>`));
      }
    }
    myMap.addLayer(markers);
  }  
  
  







// add our 'lightmap' tile layer to the map
lightmap.addTo(map)

// Create an overlay object to add to the layer control
let overlays = {
  "Coming Soon": layers.COMING_SOON,
  "Empty Stations": layers.EMPTY_STATIONS,
  //INCOMPLETE
  "Out of Order": layers.OUT_OF_ORDER
}

// Create a control














  // Create the tile layer that will be the background of our map


  // Create a baseMaps object to hold the lightmap layer


  // Create an overlayMaps object to hold the bikeStations layer


  // Create the map object with options


  // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
  
// Create the createMarkers function

  // Pull the "stations" property off of response.data

  // Initialize an array to hold bike markers

  // Loop through the stations array
  for (let index = 0; index < stationInfo.length; index++) {
    var station = Object.assign({}, stationInfo[i], station)
  
    // For each station, create a marker and bind a popup with the station's name

    // Add the marker to the bikeMarkers array

  // Create a layer group made from the bike markers array, pass it into the createMap function
  }

// Perform an API call to the Citi Bike API to get station information. Call createMarkers when complete


