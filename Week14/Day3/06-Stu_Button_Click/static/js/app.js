// Randomly select an episode number for Star Wars
var text = d3.select(".star-wars")
  .text(Math.floor(Math.random() * 8) + 1);

// Select the upvote and downvote buttons
var upvote = d3.select(".upvote");
var downvote = d3.select(".downvote");

// Select the counter h1 element
var counter = d3.select(".counter")
// Use D3 `.on` to attach a click handler for the upvote
upvote.on("click",() => {
  var currentCount = parseInt(counter.text());
  currentCount += 1;
  counter.text(currentCount);
})
// Use d3 `.on` to attach a click handler for the downvote
downvote.on("click",() => {
  var currentCount = parseInt(counter.text());
  if (currentCount > 0) {
    currentCount -= 1;
  }else {
    currentCount = 0
  }
  counter.text(currentCount);
})