//function to return a random number from 1,2 or 3
function computerPlay() 
{
    let rand;
    let play_list = ["Rock", "Paper", "Scissor"];
    rand = Math.floor(Math.random() * 3 ) ;
    return [play_list[rand],rand];
}


function playRound(playerSelection, computerSelection) 
{
    if (playerSelection == 'rock')
    {
        if (computerSelection == 'Rock')
            return "It's a Tie!";
        else if (computerSelection == 'Paper')
        {
            global_computerwins++;
            return "You Lose! Paper beats rock.";
        }
        else
        {
            global_playerwins++;
            return "You Win! Rock beats scissor";
        }
    }

    else if (playerSelection == 'paper')
    {
        if (computerSelection == 'Paper')
            return "It's a Tie!";
        else if (computerSelection == 'Scissor')
        {
            global_computerwins++;
            return "You Lose! Scissor beats Paper.";
        }
        else
        {
            global_playerwins++;
            return "You Win! Paper beats Rock";
        }
    }

    else if (playerSelection == 'scissor')
    {
        if (computerSelection == 'Scissor')
            return "It's a Tie!";
        else if (computerSelection == 'Rock')
        {
            global_computerwins++;
            return "You Lose! Rock beats Scissor."
        }
        else
        {
            global_playerwins++;
            return "You Win! Scissor beats Paper"
        }
    }
    else
    {
        return `${playerSelection} is not a valid weapon`
    }
}

function disableGame()
{
    buttons.forEach(elem => {                     //copied this logic from someone's project though
        elem.disabled = true
        elem.classList.add("disabled")
    })
}

function populateResult(result)
{
    const resultDiv = document.querySelector(".Result");
    const playerWinDiv = document.querySelector(".PlayerWin");
    const computerWinDiv = document.querySelector(".ComputerWin");

    resultDiv.textContent = `Result : ${result}`;
    playerWinDiv.textContent = `Player Win Count: ${global_playerwins}`;
    computerWinDiv.textContent = `Computer Win Count: ${global_computerwins}`;

    if (global_computerwins == 5)
    {
        resultDiv.textContent = "You lost to a computer in a tic-tac-toe match. Let that sink in."
        disableGame();
    }
    else if (global_playerwins == 5)
    {
        resultDiv.textContent = "Good job beating a computer in a tic-tac-toe match. HurRaY!"
        disableGame();
    }
}

function game(className)
{
    //take two parameters from return, selected string and the random number
    computerReturn = computerPlay();
    computerSelection = computerReturn[0];
    computerIndex = computerReturn[1];

    //Generate new image based on the random number each turn
    var computerChoiceImg = document.querySelector('.computerSelection')
    const srcArray = ['images/rock.png','images/paper.png','images/scissor.png']
    computerChoiceImg.src = srcArray[computerIndex]

    playerSelection = className.toLowerCase();
    result = playRound(playerSelection,computerSelection);
    populateResult(result);
}

let global_playerwins;
let global_computerwins;
global_computerwins = 0;
global_playerwins = 0;

const buttons = document.querySelectorAll('.Button');
buttons.forEach(button => button.addEventListener("click", function()   // this section of the code was the most troublesome... and bringing this forEach out to
{                                                                       // global scope is what took multiple days to figure out. 
    game(button.value);
}))