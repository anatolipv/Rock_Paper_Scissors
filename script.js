//Computer move
const RockPaperScissors=["rock","paper","scissors"];
function computerPlay(){
    let randomPlay = RockPaperScissors[Math.floor(Math.random()*3)];
    compPlay.textContent="Computer play: "+randomPlay.toUpperCase();
    return randomPlay;
    // console.log(randomPlay);
}

function playerPlay(){
    let player = prompt("Lets plat Rock Paper Scissors(type in your move)");
    
     return player.toLowerCase();
}

//Round of RPS
function SingleRoundOfRPS(player,computer){
    const win = "You WIN!";
    const loose= "You LOST!";
    const draw= "DRAW!";
    if(player == computer)
        return draw;
    else if (player=="rock" && computer=="scissors")
        return win;
    else if (player=="rock" && computer=="paper")
        
        return loose;
    else if (player=="paper" && computer=="scissors")
        
        return loose;
    else if (player=="paper" && computer=="rock")
        
        return win;
    else if (player=="scissors" && computer=="rock")
        
        return loose;
    else if (player=="scissors" && computer=="paper")
        
        return win;
}

const body = document.querySelector("body");

// computer play
const compPlay = document.createElement("div");
compPlay.style.textAlign="center";
compPlay.textContent="Computer play";
compPlay.style.marginBottom="20px";
body.appendChild(compPlay);

// button Holder
const container = document.querySelector(".container");
container.style.display="flex";
container.style.justifyContent="space-evenly";
container.style.marginBottom="20px";

// round result Holder
const resultRound = document.createElement("div");
resultRound.style.textAlign="center";
resultRound.style.marginBottom="20px";
resultRound.textContent="Round Result";
body.appendChild(resultRound);

//result counters
let counterWins =0;
let counterLooses =0;
let counterDraws=0;

//result since page load
const result = document.createElement("div");
result.style.textAlign="center";
result.textContent="Overal result:\n WINS:"+counterWins+" LOOSES:"+counterLooses+" DRAWS:"+counterDraws;
body.appendChild(result);



// button Rock
const buttonRock = document.createElement("button");
buttonRock.textContent="ROCK";
container.appendChild(buttonRock);
buttonRock.addEventListener("click",()=>{
    let checkresult=SingleRoundOfRPS("rock",computerPlay());
    resultRound.textContent=checkresult;
    if(checkresult=="You WIN!")
        counterWins++;
    else if(checkresult=="You LOST!")
        counterLooses++;
    else 
        counterDraws++;
    result.textContent="Overal result:\n WINS:"+counterWins+" LOOSES:"+counterLooses+" DRAWS:"+counterDraws;

});

// button Paper
const buttonPaper=document.createElement("button");
buttonPaper.textContent="PAPER";
container.appendChild(buttonPaper);
buttonPaper.addEventListener("click",()=>{
    let checkresult=SingleRoundOfRPS("paper",computerPlay());
    resultRound.textContent=checkresult;
    if(checkresult=="You WIN!")
        counterWins++;
    else if(checkresult=="You LOST!")
        counterLooses++;
    else 
        counterDraws++;
    result.textContent="Overal result:\n WINS:"+counterWins+" LOOSES:"+counterLooses+" DRAWS:"+counterDraws;

});


// button Scissors
const buttonScissors=document.createElement("button");
buttonScissors.textContent="SCISSORS";
container.appendChild(buttonScissors);
buttonScissors.addEventListener("click",()=>{
    let checkresult=SingleRoundOfRPS("scissors",computerPlay());
    resultRound.textContent=checkresult;
    if(checkresult=="You WIN!")
        counterWins++;
    else if(checkresult=="You LOST!")
        counterLooses++;
    else 
        counterDraws++;
    result.textContent="Overal result:\n WINS:"+counterWins+" LOOSES:"+counterLooses+" DRAWS:"+counterDraws;

});











