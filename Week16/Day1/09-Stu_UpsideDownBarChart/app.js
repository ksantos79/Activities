// Dataset we will be using to set the height of our rectangles
var booksReadThisYear = [17, 23, 20, 34];

var svgHeight = 600
var svgWidth = 400
// Append an SVG wrapper to the page and set a variable equal to a reference to it
// YOUR CODE HERE
var svg = d3.select('#svg-area')
    .append('svg')
    .attr('height', svgHeight)
    .attr('width', svgWidth)

svg.selectAll('rect')
   .data(booksReadThisYear)
   .enter()
   .append('rect')
   .classed('bar', true)
    .attr('width', 50)
    .attr('height', function(data) {
        return data * 10
    })
    .attr('x' , function(data, index) {
        return index * 60;
    })
    .attr('y', function (data)  {
        return svgHeight - data * 10;
    })
    .attr('alt',  function(data, index) {
        return index * 60;
    } )
    
/*
svg.selectAll('rect')
    .data(booksReadThisYear)
    .enter()
    .append('rect')
    .attr('width', (d) => {
        return d * 10
    })
    .attr('x')
    .attr('y', (data, index) => {
        return i * 60;
    })
*/
// Vertical Bar Chart
// YOUR CODE HERE

// BONUS
// Horizontal Bar Chart
// YOUR CODE HERE

// BONUS 2
// Alter your Vertical bar chart code to go from bottom  up.
