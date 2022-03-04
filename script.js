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

// console.log(SingleRoundOfRPS(playerPlay(),computerPlay())); One Round of RPS