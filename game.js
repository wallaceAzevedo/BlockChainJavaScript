var bets = [];

function addBet(bet) {
    bets.push(bet);
}

function clearBets() {
    bets = [];
}

let generateRandomNum = () => {
  return Math.floor(Math.random() * 1000 + 1);
}
let getWinner = () => {
    let winNum = generateRandomNum();
    let closest = 1000;
    let currWinner = 0;
    console.log("Winning number is:" + winNum);

    for(var i = 0; i < bets.length; i++) {
       let diff = Math.abs(bets[i].value - winNum);
       if(diff < closest) {
            closest = diff;
            currWinner = i;
       }
    }
    return bets[currWinner];
}

//addBet({name:"wallace", value: 500});
//addBet({name:"allan", value: 50});
//console.log(bets);
//console.log("Winner is: " + getWinner().name);