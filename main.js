
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

function selectGame(mama){
  if(mama === "classic"){
    currentGame.gameType = classicChoices
  } else if (mama = "advanced"){
    currentGame.gameType = advancedChoices
  }
}

function catpureChoices(mama){
  

  if(currentGame.gameType.includes("lizard")){
  currentGame.player1.choice = mama
  currentGame.player2.choice = advancedChoices[getRandomIndex(advancedChoices)]
} else {
  currentGame.player1.choice = mama
  currentGame.player2.choice = classicChoices[getRandomIndex(classicChoices)]
}
}

function updateGameBoard(){

 gameBoardChoices.push(currentGame.player1.choice, currentGame.player2.choice)
 console.log(gameBoardChoices)
}
//   if(currentGame.player1.turn === true && currentGame.gameType === classicChoices) {
//     choices.push(event, classicChoices[getRandomIndex(classicChoices)])
//   } else if (currentGame.player1.turn === true && currentGame.gameType === advancedChoices){
//   choices.push(event, advancedChoices[getRandomIndex(advancedChoices)])
//   }
//   return choices
// }

// function check(){
//   if(currentGame.player1.name === 'sun'){
//     console.log("true")
//     return true
//   }
// }

// function hello() {
  
//   console.log(createGame(gameBoardChoices))
//   console.log(selectGame("advanced"))
//   console.log(catpureChoices("rock"))
//   updateGameBoard()
  
//   console.log(currentGame)
//   console.log(currentGame)
//   checkForWins(gameBoardChoices)
 
// }
// console.log(hello())


// function checkforDraw(choice1, choice2){
//   if(choice1 === choice2 ){
//     draw  = true
//   }
// }

function checkForWins(gameBoardChoices) {
  
  console.log(gameBoardChoices)
  var choice1 = gameBoardChoices[0]
  console.log(choice1)
  var choice2 = gameBoardChoices[1]
  console.log(choice2)
  // var player1wins = currentGame.player1.wins 
  // console.log(player1wins)
  // var player2wins = currentGame.player2.wins

if (choice1 === "rock" && (choice2 === "scissors" || choice2 === "lizard")) {
    currentGame.player1.wins +=  1
    // clearGameBoard(gameBoardChoices)
  } else if (choice1 === "paper" && (choice2 === "rock" || choice2 === "alien")){
    currentGame.player1.wins +=  1
    // clearGameBoard(gameBoardChoices)
  } else if (choice1 === "scissors" && (choice2 === "paper" || choice2 === "paper") ) {
    currentGame.player1.wins +=  1
    // clearGameBoard(gameBoardChoices)
  } else if ( choice1 === "lizard" && (choice2 === "paper" || choice2 === "alien")){
    currentGame.player1.wins +=  1
    // clearGameBoard(gameBoardChoices)
  } else if (choice1 === "scissors" && (choice2 === "rock" || choice2 === "alien")) {
    currentGame.player2.wins += 1
    // clearGameBoard(gameBoardChoices)
  } else if (choice1 === "rock" && (choice2 ===  "paper" ||choice2 === "alien")){
    currentGame.player2.wins += 1
    // clearGameBoard(gameBoardChoices)
  } else if (choice1  === "paper" && (choice2 === "scissors" || choice2 === "lizard")){
    currentGame.player2.wins += 1
    // clearGameBoard(gameBoardChoices)
 
  } 
  
}




// function checkStuff(array){
//   // console.log("array[0] === rock", array[0] === "rock")
//   // console.log("array[1] === scissors || lizard", array[1] === "scissors" || "lizard")
//   // console.log("array[1] === scissors || array[1] === lizard", array[1] === "scissors" || array[1] === "lizard")
//   console.log(array[0] === "rock" && (array[1] === "scissors" || array[1] === "lizard"))
// }
// checkStuff(["rock", "lizard"])
// checkStuff(["rock", "scissors"])
// checkStuff(["rock", "blah"])



// console.log(checkForWins("rock", "paper"))

// function letsPlay() {
//   createGame()
//   checkForWins("rock", "paper")
// }

// console.log(letsPlay())
 