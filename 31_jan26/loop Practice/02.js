// guess game 


let gameNum = 25;
let userNum = prompt("Guess the game num(0-100) :");

while (userNum != gameNum ){
     userNum = prompt(" You enter Wrong Num , Guess again :");
}
console.log("Congratulation you guess right num  ");
