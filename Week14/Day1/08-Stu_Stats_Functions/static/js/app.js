var movieScore = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];

function mean(arr){
    var total = 0;
    for(var i = 0; i < arr.length; i++){
        total += arr[i];
    }
    var meanValue = total/ arr.length;
    return meanValue;
}

// ES6 
const meanES6 = (arr) => {
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    var meanValue = total/ arr.length;
    return meanValue;
}

function variance(arr){
    var meanValue = mean(arr);
    var total = 0;
    for(var i = 0; i < arr.length; i++){
        total += (arr[i] - meanValue) ** 2;
    }
    var varianceValue = total / arr.length;
    return varianceValue;
}

const varianceES6 = (arr) => {
    let meanValue = mean(arr);
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += (arr[i] - meanValue) ** 2;
    }
    let varianceValue = total / arr.length;
    return varianceValue;
}

function standardDeviation(arr) {
    var varianceValue = variance(arr);
    var standardDeviation = Math.sqrt(varianceValue);
    return standardDeviation;
}

const standardDeviationES6 = (arr) => {
    let varianceValue = variance(arr);
    let standardDeviation = Math.sqrt(varianceValue);
    return standardDeviation;
}


console.log("Movie Statistical Analysis");
console.log("--------------------------");
console.log(`The mean is ${mean(movieScore)}`);
console.log(`The mean is ${meanES6(movieScore)}`);
console.log(`The mean is ${variance(movieScore)}`);
console.log(`The mean is ${varianceES6(movieScore)}`);
console.log(`The mean is ${standardDeviation(movieScore)}`);
console.log(`The mean is ${standardDeviationES6(movieScore)}`);
