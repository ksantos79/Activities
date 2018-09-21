function init() {
  var data = [{
    values: [19, 26, 55, 88],
    labels: ["Spotify", "Soundcloud", "Pandora", "Itunes"],
    type: "pie"
  }];

  var layout = {
    height: 600,
    width: 800
  };
  console.log(data);
  Plotly.plot("pie", data, layout);
}

function updatePlotly(newdata) {
  // YOUR CODE HERE
  // Use `Plotly.restyle` to update the pie chart with the newdata array
  let PIE = document.getElementById("pie");
  console.log(PIE);
  console.log(newdata);
  
  Plotly.restyle(PIE, "values", [newdata]);
}

function getData(dataset) {
  // YOUR CODE HERE
  // create a select statement to select different data arrays (YOUR CHOICE)
  // whenever the dataset parameter changes. This function will get called
  // from the dropdown event handler.
  let data = [];
  switch(dataset){
    case "dataset1":
      data = [10,20,30,50];
      break;
    case "dataset2":
      data = [35,40,5,20];
      break;
  }




  updatePlotly(data);
}

init();
