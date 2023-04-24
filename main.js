//VARIABLES
var classicChoices = [
  {
    playersChoice: "rock",   
    src:"assets/cave.png"
  }, 
  {playersChoice:"paper",
  src:"assets/happy-paper.png"
}, {playersChoice: "scissors",
src: "assets/happy-scissors.png"}];
var advancedChoices = [  {playersChoice: "rock",   src:"assets/cave.png"
} , {playersChoice:"paper",
src:"assets/happy-paper.png"}, {playersChoice: "scissors",
src: "assets/happy-scissors.png"}, {playersChoice: 'alien',
src: "assets/flat-alien.png"}, {playersChoice: "lizard", src:"assets/lizard.png"}];

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
var displayChoices = document.querySelector(".display-choices")
var rock = document.getElementById("rock")
var gameSelectorSection = document.querySelector(".game-selector");
var changeGameButton = document.querySelector(".change-game-button");
var gameholder = document.querySelector(".game-holder")

//EVENT LISTENERS
window.addEventListener("load", createGame)
gameSelectorSection.addEventListener("click", function(event){
  selectGame(event)
  showGame(event)
})

buttonContainer.addEventListener("click", function(event){
  capturePlayersChoices(event)
  updateGameBoard(currentGame)
  checkForWins()
  checkForDraw()
  displayGameChoices(event)
  setTimeout(resetGame, 1000)
})

changeGameButton.addEventListener('click', function(){
  // hide(difficultContainer)
  // hide(classicGameButtons)
  // show(difficultContainer)
  // show(classicContainer)
  show(gameSelectorSection)
  hide(buttonContainer)
  hide(changeGameButton)
  selectFighter.innerText = "Choose your Game!"
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
    hide(gameSelectorSection)
    show(buttonContainer)
    show(classicGameButtons)
    selectFighter.innerText = "Choose your fighter"
  } else if(gameChoice === 'difficult-info'){
    hide(gameSelectorSection)
    show(classicGameButtons)
    show(difficultGameButtons)
    show(buttonContainer)
    selectFighter.innerText = "Choose your fighter!"
  }
}

//UPDATING THE DATA MODEL
function createPlayer (name, token){
  var player = {
    name: name,
    token: token,
    wins: 0,
    choice: {
      playersChoice: null,
      src: null
    }
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
  console.log(gameChoice)
  return currentGame
}

function showWinCount(){
  player1Wins.innerText = `Wins: ${currentGame.player1.wins}`
  player2Wins.innerText = `Wins: ${currentGame.player2.wins}`
}

function capturePlayersChoices(event){
  event.preventDefault()
  if(currentGame.gameType.toString() == advancedChoices.toString()){
    currentGame.player1.choice.playersChoice = event.target.id
    currentGame.player1.choice.src = event.target.src
    currentGame.player2.choice = advancedChoices[getRandomIndex(advancedChoices)]
  } else  {
    currentGame.player1.choice.playersChoice = event.target.id
    currentGame.player1.choice.src = event.target.src
    currentGame.player2.choice = classicChoices[getRandomIndex(classicChoices)]
  }
  console.log("captureplayerschocies")
}

function updateGameBoard(currentGame){
  currentGame.gameBoard = []
  currentGame.gameBoard.push(currentGame.player1.choice, currentGame.player2.choice)
  console.log("updategameboard")
}

function checkForWins() {
  var choice1 = currentGame.gameBoard[0].playersChoice
  var choice2 = currentGame.gameBoard[1].playersChoice

if (choice1 === "rock" && (choice2 === "scissors" || choice2 === "lizard")) {
    selectFighter.innerText = "Sun won this round!"
    currentGame.player1.wins += 1
  } else if (choice1 === "paper" && (choice2 === "rock" || choice2 === "alien")){
    selectFighter.innerText = "Sun won this round!"
    currentGame.player1.wins += 1
  } else if (choice1 === "scissors" && (choice2 === "paper" || choice2 === "lizard") ) {
    selectFighter.innerText = "Sun Won this round!"
    currentGame.player1.wins += 1
  } else if ( choice1 === "lizard" && (choice2 === "paper" || choice2 === "alien")){
    selectFighter.innerText = "Sun won this round!"
    currentGame.player1.wins +=  1
  } else if (choice1 === "alien" && (choice2 === "scissors" || choice2 === "rock")) {
    selectFighter.innerText = "Sun won this round!"
    currentGame.player1.wins += 1
  } if (choice2 === "rock" && (choice1 === "scissors" || choice1 === "lizard")) {
    selectFighter.innerText = "Earth won this round!"
    currentGame.player2.wins += 1
  } else if (choice2 === "paper" && (choice1 === "rock" || choice1 === "alien")){
    selectFighter.innerText = "Earth won this round!"
    currentGame.player2.wins += 1
  } else if (choice2 === "scissors" && (choice1 === "paper" || choice1 === "lizard") ) {
    selectFighter.innerText = "Earth won this round!"
    currentGame.player2.wins += 1
  } else if ( choice2 === "lizard" && (choice1 === "paper" || choice1 === "alien")){
    selectFighter.innerText = "Earth won this round!"
    currentGame.player2.wins +=  1
  } else if (choice2 === "alien" && (choice1 === "scissors" || choice1 === "rock")) {
    selectFighter.innerText = "Earth won this round!"
    currentGame.player2.wins += 1
  } else if (choice1 === choice2){
    currentGame.draw = true
  }

  return currentGame
}

function displayGameChoices(event){
  var mama = event.target.id
  if( mama === "rock") { 
    renderWins()
    showWinCount()
    hide(classicGameButtons)
    hide(difficultGameButtons)
    show(displayChoices)
  } else if(mama ==="scissors") {
    renderWins()
    showWinCount()
    hide(classicGameButtons)
    hide(difficultGameButtons)
    show(displayChoices)
  } else if (mama === "paper") {
    hide(classicGameButtons)
    renderWins()
    showWinCount()
    hide(classicGameButtons)
    hide(difficultGameButtons)
    show(displayChoices)
  } else if (mama === "lizard") {
    renderWins()
    showWinCount()
    hide(classicGameButtons)
    hide(difficultGameButtons)
    show(displayChoices)
  } else if (mama === "alien") {
    renderWins()
    showWinCount()
    hide(classicGameButtons)
    hide(difficultGameButtons)
    show(displayChoices)
  }
}

function checkForDraw(){
  if (currentGame.draw === true){
    selectFighter.innerText = "It's a draw"
  }
}

function renderWins(){
  displayChoices.innerHTML = `
  <img id="${currentGame.player1.choice.playersChoice}" src="${currentGame.player1.choice.src}" alt="animated cave">
  <img id="${currentGame.player2.choice.playersChoice}" src="${currentGame.player2.choice.src}" alt="animated cave">
  `
}

function refresh(){
  if(currentGame.gameType.length === 3) {
    show(classicGameButtons)
    hide(displayChoices)
    selectFighter.innerText = "Choose your fighter!"
  } else if (currentGame.gameType.length === 5) {
    show(classicGameButtons)
    show(difficultGameButtons)
    show(buttonContainer)
    hide(displayChoices)
    selectFighter.innerText = "Choose your fighter!"
  }
}

function resetGame(){
  currentGame.player1.choice = {
    playersChoice: null,
    src: null
  }
  currentGame.player2.choice = {
    playersChoice: null,
    src: null
  }
  currentGame.gameBoard = []
  currentGame.draw = false
  refresh()
  show(changeGameButton)
}

