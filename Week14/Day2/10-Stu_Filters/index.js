// @TODO: Uncomment the following file and complete the code
//        according to the instructions in README.md.

//Roster of player
var roster = [{
  name: "Doug",
  position: "Quarterback",
  madeTeam: true
},
{
  name: "Antonio",
  position: "Tight End",
  madeTeam: true
},
{
  name: "Nick",
  position: "Kicker",
  madeTeam: false
},
{
  name: "Ereck",
  position: "Offensive Live",
  madeTeam: false
},
{
  name: "AJ",
  position: "Line Backer",
  madeTeam: true
}];

// YOUR CODE HERE
const makeCut = (player) => {
    return player.madeTeam
}

let playerOnTeam = roster.filter(makeCut);

console.log(playerOnTeam);

let numberOfPlayer = playerOnTeam.length;
let numberOfCutPlayer = roster.length - numberOfPlayer;
console.log(`${numberOfPlayer} players made the team`);
console.log(`${numberOfCutPlayer} players were cut`);