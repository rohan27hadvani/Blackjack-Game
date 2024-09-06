
var cards = []
var sum = 0
var hasBlackJack = false
var isAlive = false
var message = ""

var messageEl = document.getElementById("message-el")
var sumEl = document.getElementById("sum-el")
var cardsEl =document.getElementById("cards-el")

// var playerEl = document.getElementById("name-el")
// var chipsEl = document.getElementById("chips-el")

// var player = {
//     name: "Test",
//     chips: 100
// }

// playerEl.textContent = "Player Name: " + player.name

// chipsEl.textContent = "Player Chips: $" + player.chips 




function getRandomCard() {
    var randomCard = Math.floor(Math.random() * 13) + 1
    

    if (randomCard > 10) {
        return 10
    } 
    else if (randomCard === 1) {
        return 11
    }
    else {
        return randomCard;
    }
}

function startGame() {
    isAlive = true;
    var firstCard = getRandomCard()
    var secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum 
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } 
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } 
    else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
   
}

function newCard() {
    if (isAlive == true && hasBlackJack == false){
    console.log("Drawing a New Card!")
    var card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}