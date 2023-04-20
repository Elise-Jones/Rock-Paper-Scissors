
var classicChoices = ["rock", "paper", "scissors"];
var advancedChoices = ["rock", "paper", "scissors", "lizard", "alien"];
// var choices = [];
var currentGame;

// Create the eatePlayer functioncr
// You’ll need a createPlayer function, that should return an object with the following properties:
// name (ex: 'Human'), token (ex: '👩🏻'), wins (ex: 0)

function createPlayer (name, token, turn){
  var player = {
    name: name,
    token: token,
    wins: 0,
    choice: null
  }
  return player;
}
// Create the createGame function
// A createGame function that should return a game object containing:
// Two Player objects (player1 and player2)
// A way to keep track of the data for the game board
// A way to keep track of the selected game type
function createGame() {
  currentGame = {
    player1: createPlayer("sun", "🌞"),
    player2: createPlayer("earth", "🌏"),
    gameBoard: [],
    gameType: null,
  }
  return currentGame

}
