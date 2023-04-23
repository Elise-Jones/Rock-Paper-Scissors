//VARIABLES
var classicChoices = ["rock", "paper", "scissors"];
// var classicChoices = document.querySelector(".classic-buttons").elements
var advancedChoices = ["rock", "paper", "scissors", 'alien', "lizard"];
var currentGame;
var gameType = null
//QUERYSELECTORS
var mainGameSection = document.querySelector("main")
var classicGameButtons = document.querySelector(".classic-buttons")
var difficultGameButtons = document.querySelector(".difficult-buttons")
var classicContainer = document.querySelector(".classic-container")
var difficultContainer = document.querySelector(".difficult-container")
var selectFighter = document.querySelector("h2");
var buttonContainer = document.querySelector(".button-container");
var player1Wins = document.querySelector(".player1-wins")
var player2Wins = document.querySelector(".player2-wins")

//EVENT LISTENERS
window.addEventListener("load", createGame)

mainGameSection.addEventListener('click', function(event){
selectGame(event)
showGame(event)
capturePlayersChoices(event)
updateGameBoard(currentGame)
checkForWins()
})

//UPDATING DOM
function hide(element) {
  element.classList.add("hidden");
}

function show(element) {
  element.classList.remove("hidden");
}

function showGame(event){

  var gameChoice = event.target.classList.value
  if(gameChoice === "classic-info"){
    hide(classicContainer)
    hide(difficultContainer)
    show(classicGameButtons)
    selectFighter.innerText = "Choose your fighter"
  } else if(gameChoice === 'difficult-info'){
    
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
    gameType: gameType,
    draw: false,
  }

  return currentGame
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function selectGame(event){
  var gameChoice = event.target.classList.value
  if(gameChoice === "classic-info"){
   currentGame.gameType = classicChoices
  } else if (gameChoice === "difficult-info"){

    currentGame.gameType = advancedChoices
  }

  return currentGame
  
}

function renderWins(){
  player1Wins.innerText = `${currentGame.player1.wins}`
  player2Wins.innerText = `${currentGame.player2.wins}`
}

function capturePlayersChoices(event){
  event.preventDefault()
  if(currentGame.gameType.toString() == advancedChoices.toString()){
    currentGame.player1.choice = event.target.id
    currentGame.player2.choice = advancedChoices[getRandomIndex(advancedChoices)]
  } else  {
    currentGame.player1.choice = event.target.id
    currentGame.player2.choice = classicChoices[getRandomIndex(classicChoices)]
  }
return currentGame
}

function updateGameBoard(currentGame){
  currentGame.gameBoard = []
  currentGame.gameBoard.push(currentGame.player1.choice, currentGame.player2.choice)
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

