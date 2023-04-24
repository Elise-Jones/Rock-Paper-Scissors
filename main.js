//VARIABLES
var classicChoices = [
  {playersChoice: "rock",   src:"assets/cave.png"
} , {playersChoice:"paper",
src:"assets/happy-paper.png"}, {playersChoice: "scissors",
src: "assets/happy-scissors.png"}];
var advancedChoices = [  {playersChoice: "rock",   src:"assets/cave.png"
} , {playersChoice:"paper",
src:"assets/happy-paper.png"}, {playersChoice: "scissors",
src: "assets/happy-scissors.png"}, {playersChoice: 'alien',
src: "assets/flat-alien.png"}, {playersChoice: "lizard", src:"assets/lizard.png"}];
// var classicChoices = document.querySelector(".classic-buttons").elements
// var advancedChoices = ["rock", "paper", "scissors", 'alien', "lizard"];
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
var gameSelectorSection = document.querySelector(".game-selector")

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
  displayGameChoices(event)
  setTimeout(resetGame, 3000)

})
// mainGameSection.addEventListener('click', function(event){

// 
// 
// 
// 
// 
// 
// setTimeout(resetGame, 2000)


// })

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
console.log("selectGame")
  return currentGame
  
}

function showWinCount(){
  player1Wins.innerText = `Wins: ${currentGame.player1.wins}`
  player2Wins.innerText = `Wins: ${currentGame.player2.wins}`
  console.log("showWINCOUNT")
}

function capturePlayersChoices(event){
  console.log(event.target.value)
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
  console.log("player1choice", choice1)
  console.log("player2choice", choice2)

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
  console.log("cheforwins")
  return currentGame
}

function displayGameChoices(event){
  var mama = event.target.id
  if( mama === "rock"){ 
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
} else if (mama === "paper"){
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
// } else if (mama === mama){
//   selectFighter.innerText = "It's a draw"
// }
console.log("display Game")
}


}

function checkForDraw(){
  if (currentGame.draw === true){
    selectFighter.innerText = "It's a draw"
  }
}

function renderWins(){
  console.log(currentGame.player2.choice.src)
  displayChoices.innerHTML = `
  <img id="${currentGame.player1.choice.playersChoice}" src="${currentGame.player1.choice.src}" alt="animated cave">
  <img id="${currentGame.player2.choice.playersChoice}" src="${currentGame.player2.choice.src}" alt="animated cave">
  `
}

function refresh(){
  if(currentGame.gameType.length === 3){
    show(classicGameButtons)
    hide(displayChoices)
    selectFighter.innerText = "Choose your fighter!"
    
  } else if (currentGame.gameType.length === 5){
    show(classicGameButtons)
    show(difficultGameButtons)
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

  refresh()
}

