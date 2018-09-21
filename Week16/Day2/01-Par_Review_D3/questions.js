// Answer the following questions after discussing with a partner.

/* 1. What does SVG stand for? How are they used with D3? */
// Scalable Vector Graphics
// Allows us to define graphics like shape and lines fiving us flexibility to build custom charts
/* 2. What is data binding? */
// SVG files allow us to define our own graphics like shape and line. 
// This give us flexibility to build our custom charts.


/* 3. Given the following and an HTML page with no elements currently in the body,
use the enter() pattern to render three <li> elements to the page with text matching
the integers in the array. */

var arr = [1, 2, 3];
var ul = d3.select("body").append("ul");
// YOUR CODE HERE//
var selection = ul.selectAll('li')
    .data(arr)
    .enter()
    .append('li')
    .text((d) => {
        return d;
    })

/* 4. Imagine three <li> elements already exist on the page.  Create code to update the text of those elements while also adding three new elements to match the array below. */
var arr = [1, 1, 2, 3, 5, 8];
var ul = d3.select("ul");
// YOUR CODE HERE //
var selection = ul.selectAll('li')
    .data(arr)
    .enter()
    .append('li')
    .text((d) => {
        return d;
    })

/* Bonus - Refactor your solution to number 4 above using the ES6 syntax for arrow functions. Then, modify the code to set the text of each
element to "<index in the array>: <item from the array>" */
// YOUR CODE HERE //
var selection = ul.selectAll('li')
    .data(arr)
    .enter()
    .append('li')
    .merge(selection)
    .text((d,i) => `${i}: ${d}`)