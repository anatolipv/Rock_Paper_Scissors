const RockPaperScissors=["rock","paper","scissors"];
function computerPlay(){
    let randomPlay = RockPaperScissors[Math.floor(Math.random()*3)];
    return randomPlay;
    // console.log(randomPlay);
}

function playerPlay(){
    let player = prompt("Lets plat Rock Paper Scissors(type in your move)");
    
     return player.toLowerCase();
}

function SingleRoundOfRPS(player,computer){
    const win = "You WIN!";
    const loose= "You LOST!";
    const draw= "DRAW!";
    console.log("Player: "+player+" vs. Computer: "+computer);
    if(player == computer){
        return draw;
        console.log(draw);}
    else if (player=="rock" && computer=="scissors"){
        console.log(win);
        return win;}
    else if (player=="rock" && computer=="paper"){
        console.log(loose);
        return loose;}
    else if (player=="paper" && computer=="scissors"){
        console.log(loose);
        return loose;}
    else if (player=="paper" && computer=="rock"){
        console.log(win);
        return win;}
    else if (player=="scissors" && computer=="rock"){
        console.log(loose);
        return loose;}
    else if (player=="scissors" && computer=="paper"){
        console.log(win);
        return win;}
}

const body = document.querySelector("body");

// button Holder
const container = document.querySelector(".container");
container.style.display="flex";
container.style.justifyContent="space-evenly";
container.style.marginBottom="20px";

// button Rock
const buttonRock = document.createElement("button");
buttonRock.textContent="ROCK";
container.appendChild(buttonRock);


// button Paper
const buttonPaper=document.createElement("button");
buttonPaper.textContent="PAPER";
container.appendChild(buttonPaper);

// button Scissors
const buttonScissors=document.createElement("button");
buttonScissors.textContent="SCISSORS";
container.appendChild(buttonScissors);

// result Holder
const result = document.createElement("div");
result.style.textAlign="center";
result.textContent="Test";
body.appendChild(result);









