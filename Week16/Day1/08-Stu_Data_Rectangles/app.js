// Data which we will be using to build our rectangle
var booksReadThisYear = [15, 20, 40];

// Append the SVG wrapper to the page, set its height and width, and create a variable which references it
let svg = d3.select('#svg-area')
    .append('svg')
    .attr('height', '600')
    .attr('width', '400')

// Append a rectangle and set its height in relation to the booksReadThisYear value


svg.append('rect')
    //.classed('bar', true) // bonus
    .attr('class', 'bar')
    .data(booksReadThisYear)
    .attr('width', 100)
    .attr('height', (d) => {
        return d * 10;
    })
    .attr('x', 0)
    .attr('y', 0)
    .transition() // Bonus animations 
    .duration(10000)
    .ease(d3.easeLinear) // linear animation
    .attr('x', 250)
    .attr('y', 150)
    .attr('width', 1000)
    .attr('opacity', 0.5)
    .attr('height', 150)
    //.delay(500)
     // delay 500ms (0.5)*/

