let score=JSON.parse(localStorage.getItem('score')) 
||{ Win:0,
   Tie:0,
  Lose:0
};

updateScore();

function playGame(playerMove){
const computerMove=pickcomputerMove();

let result=' ';
if(playerMove==='rock'){
  if(computerMove==='rock'){
    result='Tie.';
  }else if(computerMove==='paper'){
    result='Lose.';
  }else if(computerMove==='scissors'){
    result='Win.';
  }
}

else if(playerMove==='paper'){
  if(computerMove==='paper'){
    result='Tie.';
  }else if(computerMove==='rock'){
    result='Win.';
  }else if(computerMove==='scissors'){
    result='Lose.';
  }
}


else if(playerMove==='scissors'){
  if(computerMove==='paper'){
    result='Win.';
  }else if(computerMove==='rock'){
    result='Lose.';
  }else if(computerMove==='scissors'){
    result='Tie.';
  }
}

if(result==='Win.'){
  score.Win+=1;
}else if(result==='Lose.'){
  score.Lose+=1;
}else if(result==='Tie.'){
  score.Tie+=1;
}


localStorage.setItem('score',JSON.stringify(score));

updateScore();

document.querySelector('.js-result')
 .innerHTML=`You ${result}`;
document.querySelector('.js-moves')
  .innerHTML=`You <img src="img/${playerMove}-emoji.png" alt="Scissors" class="move-icon"> -
   <img src="img/${computerMove}-emoji.png" alt="Scissors" class="move-icon"> Computer `

} 

function updateScore(){
document.querySelector('.js-score')
 .innerHTML=`Wins :${score.Win}, Losses :${score.Lose}, Ties :${score.Tie}`;
}


function pickcomputerMove(){
const randomNumber=Math.random()
let computerMove=' ';
if(randomNumber>=0 && randomNumber<1/3){
  computerMove='rock';
}else if(randomNumber>=1/3 && randomNumber<2/3){
  computerMove='paper';
}else if(randomNumber>=2/3 && randomNumber<1){
  computerMove='scissors';
}
return computerMove;
}