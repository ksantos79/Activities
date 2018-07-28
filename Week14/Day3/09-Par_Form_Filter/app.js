// Assign the data from `data.js` to a descriptive variable
var people = data;

// Select the submit button
var submit = d3.select("#submit");

// Complete the click handler for the form
submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  let inputElement = d3.select("#patient-form-input");
  // Get the value property of the input element
  let inputValue = inputElement.property("value");
  // Use the form input to filter the data by blood type
  console.log(inputValue);
  console.log(people);
  let filteredData = people.filter(person => person.bloodType === inputValue);
  console.log(filteredData);
  // BONUS: Calculate summary statistics for the age field of the filtered data

  // First, create an array with just the age values
  let ages = filteredData.map(person => person.age);
  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
  let mean = math.mean(ages);
  let median = math.median(ages);
  let mode = math.mode(ages);
  let variance = math.var(ages);
  let standardDeviation = math.std(ages);
  // Finally, add the summary stats to the `ul` tag
  d3.select(".summary").html("");
  d3.select(".summary")
    .append('li').text(`Mean: ${mean}`)
    .append('li').text(`Median: ${median}`)
    .append('li').text(`Mode: ${mode}`)
    .append('li').text(`Standard Deviation: ${standardDeviation}`)
});
