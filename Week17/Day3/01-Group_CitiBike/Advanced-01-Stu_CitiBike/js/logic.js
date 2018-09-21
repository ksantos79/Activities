// Create the tile layer that will be the background of our map


// Initialize all of the LayerGroups we'll be using


// Create the map with our layers


// Add our 'lightmap' tile layer to the map


// Create an overlays object to add to the layer control


// Create a control for our layers, add our overlay layers to it

// Create a legend to display information about our map


// When the layer control is added, insert a div with the class of "legend"

// Add the info legend to the map


// Initialize an object containing icons for each layer group



// Perform an API call to the Citi Bike Station Information endpoint
d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json", function(infoRes) {

  // When the first API call is complete, perform another call to the Citi Bike Station Status endpoint
  d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_status.json", function(statusRes) {
   

    // Create an object to keep of the number of markers in each layer
    

    // Initialize a stationStatusCode, which will be used as a key to access the appropriate layers, icons, and station count for layer group
    

    // Loop through the stations (they're the same size and have partially matching data)
    

      // Create a new station object with properties of both station objects
      
      // If a station is listed but not installed, it's coming soon
      
      // If a station has no bikes available, it's empty
      
      // If a station is installed but isn't renting, it's out of order
     
      // If a station has less than 5 bikes, it's status is low
      
      // Otherwise the station is normal
     

      // Update the station count
     
      // Create a new marker with the appropriate icon and coordinates
      

      // Add the new marker to the appropriate layer


      // Bind a popup to the marker that will  display on click. This will be rendered as HTML
      
    

    // Call the updateLegend function, which will... update the legend!

  });
});

// Update the legend's innerHTML with the last updated time and station count
function updateLegend(time, stationCount) {
  
}