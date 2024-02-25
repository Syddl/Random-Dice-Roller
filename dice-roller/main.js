const display = document.getElementById("display");
const button = document.getElementById("btn")

function playGame(){

    diceMove = computerDice();
    console.log(diceMove);

    if(diceMove === 1){
        display.innerHTML = `<img src="img/${1}.png" alt="">`
    }else if(diceMove === 2){
        display.innerHTML = `<img src="img/${2}.png" alt="">`
    }else if(diceMove === 3){
        display.innerHTML = `<img src="img/${3}.png" alt="">`   
    }else if(diceMove === 4){
        display.innerHTML = `<img src="img/${4}.png" alt="">`
    }else if(diceMove === 5){
        display.innerHTML = `<img src="img/${5}.png" alt="">`
    }else if(diceMove === 6){
        display.innerHTML = `<img src="img/${6}.png" alt="">`
    }

}

function computerDice(){
    let dice = Math.floor(Math.random() * 6) + 1;
    return dice;
}