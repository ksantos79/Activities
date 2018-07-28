// grab references to the input element and the output div
var text = d3.select("#text");
var output = d3.select(".output");

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to handle input change
function handleChange(event) {
  // grab the value of the input field
  var inputField = d3.event.target.value;
  console.log("D3 Event")
  console.log(d3.event)
  console.log("D3 Event Target")
  console.log(d3.event.target)
  console.log("D3 Event Target Value")
  console.log(d3.event.target.value)

  // clear the existing output
  output.html("");

  // reverse the input string
  var reversedInput = reverseString(inputField)

  // Set the output text to the reversed input string
  output.text(reversedInput);
}

// Attach an event to detect changes to the input field.
text.on("change",handleChange)
