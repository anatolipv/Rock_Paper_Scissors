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

// console.log(SingleRoundOfRPS(playerPlay(),computerPlay())); One Round of RPS

function game(){
    let winCounter = 0;
    let drawCounter =0;
    let looseCounter =0;
    let round ="";

    for (let i = 0; i < 5; i++) {
        round=SingleRoundOfRPS(playerPlay(),computerPlay());
        if(round =="You WIN!")
            winCounter++;
        else if(round =="You LOST!")
            looseCounter++;
        else 
            drawCounter++;
    }
    console.log("\nAfter 5 rounds, the result is:");
    console.log("WINS: "+winCounter);
    console.log("LOOSES: "+looseCounter);
    console.log("DRAWS :"+drawCounter);
}

game();