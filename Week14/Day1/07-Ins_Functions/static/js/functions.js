// Simple log statement
function printHello() {
  console.log("Hello there!");
}

const printHelloES6 = () => {
  console.log('Hello there!')
}

// Takes two numbers and adds them
function addition(a, b) {
  return a + b;
}

const additionES6 = (a, b) => {
  return a + b;
}

// Run the code in the `printHello` function
printHello();
console.log("ES6")
printHelloES6();

// Log results of addition function
console.log(addition(44, 50));
console.log("ES6")
console.log(additionES6(44,50));


// This function accepts a parameter and iterates through an array
function listLoop(userList) {
  for (var i = 0; i < userList.length; i++) {
    console.log(userList[i]);
  }
}

const listLoopES6 = (userList) => {
  for(let i = 0; i < userList.length; i++){
    console.log(userList[i]);
  }
}

var friends = ["Sarah", "Greg", "Cindy", "Jeff"];
listLoop(friends);
console.log("ES6")
listLoopES6(friends);

// Functions can call other functions
function doubleAddition(c, d) {
  var total = addition(c, d) * 2;
  return total;
}

const doubleAdditionES6 = (c, d) => {
  let total = additionES6(c, d) * 2;
  return total;
}

// Log results of doubleAddition function
console.log(doubleAddition(3, 4));
console.log("ES6")
console.log(doubleAdditionES6(3,4));

// Javascript built in functions
var longDecimal = 112.34534454;
var roundedDecimal = Math.floor(longDecimal);
console.log(roundedDecimal);
