// Part 1
// Generating an SVG
/*
var $svg = d3.select("body").append("svg");

$svg.attr("width", "100px").attr("height", "100px");

$svg.append("circle")
    .attr("cx", 50)
    .attr("cy", 25)
    .attr("r", 25)
    .attr("stroke", "gray")
    .attr("stroke-width", "5")
    .attr("fill", "none");
*/
// Part 2
// Binding the SVG to data

var $svg = d3.select("body").append("svg");

$svg.attr("width", "100px").attr("height", "100px");

var $circles = $svg.selectAll("circle");

var values = [{ x: 5 ,r: 50, color: 'blue' } ,{x: 10, r: 35, color: 'green' } , {x:10, r: 10, color: 'red' }];


function colorUpdate(d){
    if(d.r >= 50){
        return d.color;
    }
    return 'pink'
   
}

$circles
    .data(values)
    .enter()
    .append("circle")
    .attr("cx", function(d){
        return d.x * 2;
    })
    .attr("cy", 50)
    .attr("r", function(d) {
      return d.r;
    })
    .attr("stroke", "black")
    .attr("stroke-width", "5")
    .attr("fill",colorUpdate );
