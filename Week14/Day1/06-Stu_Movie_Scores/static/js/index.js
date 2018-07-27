// Array of movie ratings
var movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

// Starting a rating count
var sum = 0;

// Arrays to hold movie scores
var goodMovieScores = [];
var okMovieScores = [];
var badMovieScores = [];

for(let i = 0; i < movieScores.length; i++){
  let score = movieScores[i];
  sum += score;
  if(score > 7){
    goodMovieScores.push(score);
  }
  else if(score <= 7 && score > 5){
    okMovieScores.push(score);
  }
  else{
    badMovieScores.push(score);
  }
}

let avg = sum / movieScores.length;
let numGoodMovies = goodMovieScores.length;
let numOkMovies = okMovieScores.length;
let numBadMovies = badMovieScores.length;

console.log("----------------");
console.log(`There are ${goodMovieScores.length} good movies.`);
console.log(`There are ${numOkMovies} ok movies`);
console.log(`There are ${numBadMovies} bad movies`);
console.log(`The average movie rating is ${avg}`);
console.log("----------------");
