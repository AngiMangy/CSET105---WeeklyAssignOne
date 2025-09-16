const prompt = require('prompt-sync')();

// Mental Game

// Global Variables
let question = 1;
let score = 0;
let num1 = 1;
let num2 = 3;

// Level One Solution
function maxScore1(){
    while(question <= 20){
        answer = Number(prompt(`${question}) ${num1}+${num2} = `));
        if(isNaN(answer)){
            if(answer = "skip"){
                console.log(`Skip Used, Your score is ${score}`);
            }
        }
        else if(answer === num1+num2){
            score = score + 10;
            console.log(`Correct, your score is now ${score}`);
        }
        else{
            score = score - 5;
            console.log(`You Dumb? your score is now ${score}`);
        }
        num1 = num1 + 1;
        num2 = num2 + 2;
        question = question + 1;
    }
    if(question = 21){
        console.log(`Your final score is ${score}/200`);
    }
}