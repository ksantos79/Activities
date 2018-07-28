wordCount("I yam what I yam and always will be what I yam");

function wordCount(myString){
    // Convert string to an array of words
    var stringArray = myString.split(" ");
    var wordFrequency = {};
    for(var i = 0; i < stringArray.length; i++){
        var currentWord = stringArray[i];
        if(currentWord in wordFrequency){
            wordFrequency[currentWord] += 1;
        }
        else {
            wordFrequency[currentWord] = 1;
        }
    } 
    console.log(wordFrequency);
    return wordFrequency
}
console.log(wordCountES6("I yam what I yam and always will be what I yam"))

const wordCountES6 = (myString) => {
    let stringArray = myString.split(" ");
    let wordFrequency = {};
    stringArray.map((value) => {
        let currentWord = value;
        if(currentWord in wordFrequency){
            wordFrequency[currentWord] += 1;
        }
        else {
            wordFrequency[currentWord] = 1;
        }
    })
    console.log(wordFrequency);
    return wordFrequency
}
console.log("ES6");
console.log(wordCountES6("I yam what I yam and always will be what I yam"))

