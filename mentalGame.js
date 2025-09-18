const prompt = require('prompt-sync')();

// Mental Game

// Global Variables
let question = 1;
let score = 0;
let strike = 0;

// Number Randomizer
function numberRandom(min, max){
    num1 = Math.floor(Math.random() * max) + min;
    num2 = Math.floor(Math.random() * max) + min;
}
// Operation Chooser's
// Easy
function operationEasy(){
numberRandom(0,10)
// Equation Maker
    roll = Math.floor(Math.random() * 2) + 1;
    if(roll === 1){
        operation = `+`;
        solution = num1 + num2;
    }
    else if(roll === 2){
        operation = `-`;
        solution = num1 - num2;
    }
}
// Medium
function operationMedium(){
// EquationMaker 2.0
    roll = Math.floor(Math.random() * 5) + 1;
    if(roll === 1){
        operation = `+`
        numberRandom(0,100)
        solution = num1 + num2
    }
    else if(roll === 2){
        operation = `-`
        numberRandom(0,100)
        solution = num1 - num2
    }
    else if(roll === 3){
        operation = `*`
        numberRandom(0,10)
        solution = num1 * num2
    }
    else if (roll === 4){
        operation = `/`
        numberRandom(1,9)
        solution = num1 / num2
    }
    else if (roll === 5){
        operation = `%`
        numberRandom(0,10)
        solution = num1 % num2
    }
}
// Hard
function operationHard(){
        roll = Math.floor(Math.random() * 5) + 1;
    if(roll === 1){
        operation = `+`
        numberRandom(0,1000)
        solution = num1 + num2
    }
    else if(roll === 2){
        operation = `-`
        numberRandom(0,1000)
        solution = num1 - num2
    }
    else if(roll === 3){
        operation = `*`
        numberRandom(0,100)
        solution = num1 * num2
    }
    else if (roll === 4){
        operation = `/`
        numberRandom(1,100)
        solution = num1 / num2
    }
    else if (roll === 5){
        operation = `%`
        numberRandom(0,10)
        solution = num1 % num2
    }
}

// Max Score
// Easy
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
            console.log(`You Dumb? It was ${solution}, your score is now ${score}`);
        }
        question = question + 1;
    }
    if(question = 21){
        console.log(`Your final score is ${score}/200`);
    }
}
// Medium
function maxScore2(){
    while(question <= 20){
        operationMedium()
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
            console.log(`You Dumb? It was ${solution},Your score is now ${score}`);
        }
        num1 = Math.floor(Math.random() * 10);
        num2 = Math.floor(Math.random() * 10);
        question = question + 1;
    }
    if(question = 21){
        console.log(`Your final score is ${score}/200`);
    }
}
// Hard
function maxScore3(){
    while(question <= 20){
        operationHard()
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
            console.log(`You Dumb? It was ${solution},Your score is now ${score}`);
        }
        num1 = Math.floor(Math.random() * 10);
        num2 = Math.floor(Math.random() * 10);
        question = question + 1;
    }
    if(question = 21){
        console.log(`Your final score is ${score}/200`);
    }
}

// Three Out
// Easy
function strikeOut1(){
    while(strike < 3){
        operationEasy()
        answer = Number(prompt(`${question}) ${num1} ${operation} ${num2} = `));
        if(isNaN(answer)){
            strike = strike + 1;
            console.log(`invalid input, thats strike ${strike}/3,`)
            }
        else if(answer === solution){
            console.log(`Correct`);
        }
        else{
            strike = strike + 1;
            console.log(`You Dumb? It was ${solution} That's strike ${strike}/3`);
        }
        question = question + 1;
    }
    if(strike = 4){
        console.log(`You have striked out at question ${question - 1}`);
    }
}
// Medium
function stikeOut2(){
    while(strike < 3){
        operationMedium()
        answer = Number(prompt(`${question}) ${num1} ${operation} ${num2} = `));
        if(isNaN(answer)){
            strike = strike + 1;
            console.log(`invalid input, thats strike ${strike}/3,`)
            }
        else if(answer === solution){
            console.log(`Correct`);
        }
        else{
            strike = strike + 1;
            console.log(`You Dumb? It was ${solution} That's strike ${strike}/3`);
        }
        question = question + 1;
    }
    if(strike = 4){
        console.log(`You have striked out at question ${question - 1}`);
    }
}
// Hard
function strikeOut3(){
    while(strike < 3){
        operationHard();
        answer = Number(prompt(`${question}) ${num1} ${operation} ${num2} = `));
        if(isNaN(answer)){
            strike = strike + 1;
            console.log(`invalid input, thats strike ${strike}/3,`)
            }
        else if(answer === solution){
            console.log(`Correct`);
        }
        else{
            strike = strike + 1;
            console.log(`You Dumb? It was ${solution} That's strike ${strike}/3`);
        }
        question = question + 1;
    }
    if(strike = 4){
        console.log(`You have striked out at question ${question - 1}`);
    }
}

// Menu
function gameMenu(){
    console.log("Select a Game Mode:\n1 - Max Score\n2 - Strike Out\n");
    modeSelect = Number(prompt("-->"))
    if(modeSelect === 1){
        console.log("Max Score Mode Selected");
        console.log("Select a difficulty:\n1 - Easy\n2 - Medium\n 3 - Hard\n")
        difficulty = Number(prompt("-->"));
        if (difficulty === 1){
            console.clear()
            console.log("Difficulty set to Easy");
            maxScore1()
        }
        else if (difficulty === 2){
            console.clear()
            console.log("Difficulty set to Medium");
            maxScore2()
        }
        else if (difficulty === 3){
            console.clear()
            console.log("Difficulty set to Hard");
            maxScore3()
        }
    }
    else if(modeSelect === 2){
        console.log("Strike Out Mode Selected");
        console.log("Select a difficulty:\n1 - Easy\n2 - Medium\n 3 - Hard\n")
        difficulty = Number(prompt("-->"));
        if (difficulty === 1){
            console.clear()
            console.log("Difficulty set to Easy");
            strikeOut1()
        }
        else if (difficulty === 2){
            console.clear()
            console.log("Difficulty set to Medium");
            strikeOut2()
        }
        else if (difficulty === 3){
            console.clear()
            console.log("Difficulty set to Hard");
            strikeOut3()
        }
    }
}
gameMenu()