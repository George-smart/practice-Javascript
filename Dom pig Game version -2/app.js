/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice1, dice2, gamePlaying, winningScore;

init();

winningScore = 100;


var rollBtn = document.querySelector('.btn-roll');

rollBtn.addEventListener('click', function(){
    if(gamePlaying){
        //Random Number 1-6
        dice1 = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;

        //Add to the Dice and display Result
        document.querySelector('#dice-1').style.display = 'block';;
        document.querySelector('#dice-2').style.display = 'block';;
        document.querySelector('#dice-1').src = 'dice-' + dice1 + '.png';
        document.querySelector('#dice-2').src = 'dice-' + dice2 + '.png';

        if(dice1 !== 1){
            //Add to RoundScore
            roundScore += dice1 + dice2;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }
        else {
            //Next Players Turn
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
         //Add to the Global Score
        scores[activePlayer] += roundScore;

        //Update the UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        //Determine the winner
        var input = document.querySelector('.input-score').value;
        
        if(!input){
            winningScore = 100
        } 
        else {
            winningScore = input;
        }
        
        if(scores[activePlayer] >= winningScore){
            document.getElementById('name-' + activePlayer).textContent = 'Winner!'
            document.getElementById('dice-1').style.display = 'none'
            document.getElementById('dice-2').style.display = 'none'

            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
            gamePlaying = false;

        }
        else {
            nextPlayer()
        }
    } 
});


function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
        
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
        
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none'
    document.getElementById('dice-2').style.display = 'none'
}

document.querySelector('.btn-new').addEventListener('click', init)


function init(){
    
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    
    
    document.getElementById('dice-1').style.display = 'none'
    document.getElementById('dice-2').style.display = 'none'

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2'
    
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner') 
    document.querySelector('.player-0-panel').classList.add('active');
}



















