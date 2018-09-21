// Step 1: Set up our chart
//= ================================
/*let svgWidth = 960
let svgHeight = 500

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 50
};


let width = svgWidth - margin.left - margin.right;
let height = svgHeight - margin["top"] - margin["bottom"];


// Step 2 Create SVG
// append an SVG Group 


let svg = d3.select("body")
          .append("svg")
          .attr('width', svgWidth)
          .attr('height', svgHeight)


let chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`)


// Step 3 Import data 
d3.csv('mojoData.csv', function(error, mojoData) {
  if(error) throw error; 
  // Step 4 parse the data
  // Format the data and conver to numerical and data values

  let parseTime = d3.timeParse("%d-%b"); // abbreviate month Apr instead April
  console.log(parseTime);

  // Format the data
  mojoData.forEach(function(data) {
    data.date = parseTime(data.date);
    data.morning = parseInt(data.morning);
    data.evening = parseInt(data.evening);
  })

  let xTimeScale = d3.scaleTime()
      .domain(d3.extent(mojoData, d => d.date)) //[min , max]
      .range(0, width)

  let yLinearScale = d3.scaleLinear().range([height, 0]);

  let morningMax = d3.max(mojoData, d => d.morning)
  let eveningMax = d3.max(mojoData, d => d.evening)

  let yMax = 0; 
  if(morningMax > eveningMax){
    yMax = morningMax
  }
  else {
    yMax = eveningMax
  }

  yLinearScale.domain([0,yMax]);

  // Step 7
  let bottomAxis = d3.axisBottom(xTimeScale).tickFormat(d3.timeFormat('%d-%b'));
  let leftAxis = d3.axisLeft(yLinearScale);

  // Add x-axis
  chartGroup.append("g")
    .attr('transform', `translate(0, ${height})`)
    .call(bottomAxis)

  // Add y-axis
  chartGroup.append('g').call(leftAxis);


  var line1 = d3.line()
    .x(d => xTimeScale(d.date))
    .y(d => yLinearScale(d.morning))

  var line2 = d3.line()
    .x(d => xTimeScale(d.date))
    .y(d => yLinearScale(d.evening))
  

  chartGroup.append('path')
  .attr('d', line1(mojoData))
  .classed('line green', true)

  chartGroup.data([mojoData])
            .append('path')
            .attr('d', line2)
            .classed('line orange', true)










  
  




});*/































var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 50
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Step 2: Create an SVG wrapper,
// append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
// =================================
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Step 3:
// Import data from the mojoData.csv file
// =================================
d3.csv("mojoData.csv", function(error, mojoData) {
  if (error) throw error;

  // Step 4: Parse the data
  // Format the data and convert to numerical and date values
  // =================================
  // Create a function to parse date and time
  var parseTime = d3.timeParse("%d-%b");

  // Format the data
  mojoData.forEach(function(data) {
    data.date = parseTime(data.date);
    data.morning = +data.morning;
    data.evening = +data.evening;
  });

  // Step 5: Create the scales for the chart
  // =================================
  var xTimeScale = d3.scaleTime()
    .domain(d3.extent(mojoData, d => d.date))
    .range([0, width]);

  var yLinearScale = d3.scaleLinear().range([height, 0]);

  // Step 6: Set up the y-axis domain
  // ==============================================
  // @NEW! determine the max y value
  // find the max of the morning data
  var morningMax = d3.max(mojoData, d => d.morning);

  // find the max of the evening data
  var eveningMax = d3.max(mojoData, d => d.evening);

  var yMax;
  if (morningMax > eveningMax) {
    yMax = morningMax;
  }
  else {
    yMax = eveningMax;
  }

  // var yMax = morningMax > eveningMax ? morningMax : eveningMax;

  // Use the yMax value to set the yLinearScale domain
  yLinearScale.domain([0, yMax]);


  // Step 7: Create the axes
  // =================================
  var bottomAxis = d3.axisBottom(xTimeScale).tickFormat(d3.timeFormat("%d-%b"));
  var leftAxis = d3.axisLeft(yLinearScale);

  // Step 8: Append the axes to the chartGroup
  // ==============================================
  // Add x-axis
  chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

  // Add y-axis
  chartGroup.append("g").call(leftAxis);

  // Step 9: Set up two line generators and append two SVG paths
  // ==============================================

  // Line generator for morning data
  var line1 = d3.line()
    .x(d => xTimeScale(d.date))
    .y(d => yLinearScale(d.morning));

  // Line generator for evening data
  var line2 = d3.line()
    .x(d => xTimeScale(d.date))
    .y(d => yLinearScale(d.evening));

  // Append a path for line1
  chartGroup
    .append("path")
    .attr("d", line1(mojoData))
    .classed("line green", true);

  // Append a path for line2
  chartGroup
    .data([mojoData])
    .append("path")
    .attr("d", line2)
    .classed("line orange", true);

});
