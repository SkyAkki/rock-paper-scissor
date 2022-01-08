//function to return a random number from 1,2 or 3
function computerPlay() 
{
    let rand;
    let play_list = ["Rock", "Paper", "Scissor"];
    rand = Math.floor(Math.random() * 3 ) ;
    return play_list[rand];
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

function game()
{
        computerSelection = computerPlay();
        playerSelection = (prompt("Choose your weapon:")).toLowerCase();
        result = playRound(playerSelection,computerSelection);
        console.log(result);
        console.log(`Player Win Count: ${global_playerwins}`);
        console.log(`Computer Win Count: ${global_computerwins}`);
}


let global_playerwins;
let global_computerwins;
global_computerwins = 0;
global_playerwins = 0;
game();