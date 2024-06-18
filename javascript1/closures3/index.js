// closure = A function defined inside of another function,
//           the inner function has access to the variables
//           and scope of the outer function.
//           Allow for private variables and state maintenance
//           Used frequently in 35 framework: React, Vue, Angular

function creaateGame(){
    let score=0;
    function increaseScore(points){
        score+=points;
        console.log(`+${points}pts`);
    }
    function decreaseScore(points){
        score-=points;
        console.log(`-${points}pts`);
    }
    function getScore(){
        return score;
    }
    return {increaseScore,decreaseScore,getScore};
}

const game=creaateGame();

game.increaseScore(5);
game.increaseScore(6);
game.increaseScore(3);
console.log(`The final score is ${game.getScore()}pts`);