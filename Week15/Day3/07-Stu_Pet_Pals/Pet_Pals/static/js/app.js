function buildPlot() {
    /* data route */
  var url = "/api/pals";
    // @TODO: Build your plot here
    d3.json(url).then((response) => {
      console.log(response);
      let data = [response];
      let layout = {
        title: "Pet Pals",
        xaxis: {
          title: "Pet Type"
        },
        yaxis: {
          title: "Number of Pals"
        }
      }
    Plotly.newPlot("plot",data,layout);
    })
}

buildPlot();
