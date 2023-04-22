//VARIABLES
var classicChoices = ["rock", "paper", "scissors"];
var advancedChoices = ["rock", "paper", "scissors", "lizard", "alien"];
var currentGame;
//QUERYSELECTORS
var mainGameSection = document.querySelector("main")
var classicGameButtons = document.querySelector(".classic-buttons")
var difficultGameButtons = document.querySelector(".difficult-buttons")
var classicContainer = document.querySelector(".classic-container")
var difficultContainer = document.querySelector(".difficult-container")
var selectFighter = document.querySelector("h2")
//EVENT LISTENERS
mainGameSection.addEventListener('click', function(event){
showGame(event)
createGame()
})

//UPDATING DOM
function hide(element) {
  element.classList.add("hidden");
}

function show(element) {
  element.classList.remove("hidden");
}

function showGame(event){
  var gameChoice = event.target
console.log(gameChoice.parentNode)
  if(gameChoice.parentNode.classList == "classic-container"){
    hide(classicContainer)
    hide(difficultContainer)
    show(classicGameButtons)
    selectFighter.innerText = "Choose your fighter!"
  } else if(gameChoice.parentNode.classList == 'difficult-container'){
    hide(classicContainer)
    hide(difficultContainer)
    show(classicGameButtons)
    show(difficultGameButtons)
    selectFighter.innerText = "Choose your fighter!"
  }
  
}


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

