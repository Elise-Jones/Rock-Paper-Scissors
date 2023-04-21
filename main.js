var classicChoices = ["rock", "paper", "scissors"];
var advancedChoices = ["rock", "paper", "scissors", "lizard", "alien"];
var currentGame;
var gameBoardChoices = []

function createPlayer (name, token){
  var player = {
    name: name,
    token: token,
    wins: 0,
    choice: null
  }
  return player;
}

function createGame(gameBoardChoices) {
  currentGame = {
    player1: createPlayer("sun", "🌞"),
    player2: createPlayer("earth", "🌏"),
    gameBoard: gameBoardChoices,
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
}

function updateGameBoard(){
  currentGame.draw = false
  gameBoardChoices = []
  gameBoardChoices.push(currentGame.player1.choice, currentGame.player2.choice)
}

function checkForWins(gameBoardChoices) {
  var choice1 = gameBoardChoices[0]
  var choice2 = gameBoardChoices[1]

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
  currentGame;
  gameBoardChoices = []
  currentGame.player1.choice = null
  currentGame.player2.choice = null
  currentGame.gameType = null
}

