const prompt = require('prompt-sync')();

// Mental Game

// Global Variables
let question = 1;
let score = 0;
let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
let strike = 0;

// Operation Chooser
function operationEasy(){
    roll = Math.floor(Math.random() * 2) + 1;
    if(roll === 1){
        operation = `+`
        solution = num1 + num2
    }
    else if(roll === 2){
        operation = `-`
        solution = num1 - num2
    }
}

// Max Score, Easy
function maxScore1(){
    while(question <= 20){
        operationEasy()
        answer = Number(prompt(`${question}) ${num1} ${operation} ${num2} = `));
        if(isNaN(answer)){
            if(answer = "skip"){
                console.log(`Skip Used, Your score is ${score}`);
            }
        }
        else if(answer === solution){
            score = score + 10;
            console.log(`Correct, your score is now ${score}`);
        }
        else{
            score = score - 5;
            console.log(`You Dumb? your score is now ${score}`);
        }
        num1 = Math.floor(Math.random() * 10);
        num2 = Math.floor(Math.random() * 10);
        question = question + 1;
    }
    if(question = 21){
        console.log(`Your final score is ${score}/200`);
    }
}
// Three Out, Easy
function threeOut1(){
    while(strike < 3){
        operationEasy()
        answer = Number(prompt(`${question}) ${num1} ${operation} ${num2} = `));
        if(isNaN(answer)){
            strike = strike + 1
            console.log(`invalid input, thats strike ${strike}/3,`)
            }
        else if(answer === solution){
            console.log(`Correct`);
        }
        else{
            strike = strike + 1
            console.log(`You Dumb? That's strike ${strike}/3`);
        }
        num1 = Math.floor(Math.random() * 10);
        num2 = Math.floor(Math.random() * 10);
        question = question + 1;
    }
}
threeOut1()