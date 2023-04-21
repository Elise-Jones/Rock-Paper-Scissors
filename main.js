//VARIABLES
var classicChoices = ["rock", "paper", "scissors"];
var advancedChoices = ["rock", "paper", "scissors", "lizard", "alien"];
var currentGame;



//UPDATING THE DATA MODEL
function createPlayer (name, token){
  var player = {
    name: name,
    token: token,
    wins: 0,
    choice: null
  }
  return player;
}

function createGame() {
  currentGame = {
    player1: createPlayer("sun", "🌞"),
    player2: createPlayer("earth", "🌏"),
    gameBoard: [],
    gameType: null,
    draw: false,
  }
  return currentGame
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function selectGame(event){
  if(event === "classic"){
    currentGame.gameType = classicChoices
  } else if (event = "advanced"){
    currentGame.gameType = advancedChoices
  }
}

function capturePlayersChoices(event){
  if(currentGame.gameType.includes("lizard")){
    currentGame.player1.choice = event
    currentGame.player2.choice = advancedChoices[getRandomIndex(advancedChoices)]
  } else {
    currentGame.player1.choice = event
    currentGame.player2.choice = classicChoices[getRandomIndex(classicChoices)]
  }
  return currentGame
}

function updateGameBoard(){
 
  currentGame.gameBoard.push(currentGame.player1.choice, currentGame.player2.choice)
  return currentGame.gameBoard
}

function checkForWins() {
  var choice1 = currentGame.gameBoard[0]
  var choice2 = currentGame.gameBoard[1]

if (choice1 === "rock" && (choice2 === "scissors" || choice2 === "lizard")) {
    currentGame.player1.wins +=  1
  } else if (choice1 === "paper" && (choice2 === "rock" || choice2 === "alien")){
    currentGame.player1.wins +=  1
  } else if (choice1 === "scissors" && (choice2 === "paper" || choice2 === "paper") ) {
    currentGame.player1.wins +=  1
  } else if ( choice1 === "lizard" && (choice2 === "paper" || choice2 === "alien")){
    currentGame.player1.wins +=  1
  } else if (choice1 === "scissors" && (choice2 === "rock" || choice2 === "alien")) {
    currentGame.player2.wins += 1
  } else if (choice1 === "rock" && (choice2 ===  "paper" ||choice2 === "alien")){
    currentGame.player2.wins += 1
  } else if (choice1  === "paper" && (choice2 === "scissors" || choice2 === "lizard")){
    currentGame.player2.wins += 1
  } else if (choice1 === choice2){
    currentGame.draw = true
  }
}

function resetGame(){
  currentGame.player1.choice = null
  currentGame.player2.choice = null
  currentGame.gameBoard = []
  return currentGame
}

