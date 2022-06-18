// Cache DOM Elements for Flip
var card = document.querySelector('.hero-inner');
var rules = document.querySelector('.rules')
var back = document.querySelector('.back')
var trivia = document.querySelector('.trivia')
var rule_list = document.querySelector('.rule-list')
var trivia_list = document.querySelector('.trivia-list')

//Cache DOM Elements for Game
var play = document.querySelector('.letsplay')
var interface = document.querySelector('.interface')
var playerChoiceImg = document.querySelector('.playerSelection')
var choiceArray = document.querySelectorAll('.buttonforplayers > button')

//Conditional Render Grid
interface.style.visibility = 'hidden'
interface.style.opacity = 0

//Card Flip Functionality -------------------------------------------->
function flipper(rules,trivia){
    card.classList.toggle('is-flipped');
    rule_list.hidden = rules
    trivia_list.hidden = trivia
}
rules.addEventListener( 'click', function() {
    flipper(false,true)
});
trivia.addEventListener( 'click', function() {
    flipper(true,false)
  });
back.addEventListener('click', function() {
    flipper(true,true)
})
//Flip Functionality End ----------------------------------------------->

//Conditional Render Grid
play.addEventListener('click', function() {
    play.hidden = true
    interface.style.visibility = 'visible'
    interface.style.opacity = 100
})

//Hover image logic
choiceArray.forEach(element => {
    element.addEventListener("mouseover", function(event) {
        playerChoiceImg.src =  element.children[0].src;
    },true)
})