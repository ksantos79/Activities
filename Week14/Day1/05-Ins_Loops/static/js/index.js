// Prototypical use case increments loop counter by one on each iteration
for (var i = 0; i < 10; i++) {
  console.log("Iteration #", i);
}
console.log("=====================");
// Looping through an array
var students = ["Johnny", "Tyler", "Bodhi", "Pappas"];

for (var j = 0; j < students.length; j++) {
  console.log(j);
  console.log(students[j]);
}
console.log("=====================");

for(let student in students){
  console.log(student); // index position 
  console.log(students[student]); // value of that position
}

let student = 0;

//students[0] Johnny
// students[1] Tyler
