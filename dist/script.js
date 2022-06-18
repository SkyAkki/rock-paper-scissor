// Cache DOM Elements
var card = document.querySelector('.hero-inner');
var rules = document.querySelector('.rules')
var back = document.querySelector('.back')
var trivia = document.querySelector('.trivia')
var rule_list = document.querySelector('.rule-list')
var trivia_list = document.querySelector('.trivia-list')

//Card Flip Functionality
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