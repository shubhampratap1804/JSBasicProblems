const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Enter a number either 1 or 2: `,(num) =>{
    if(num == 1){
        console.log("Head wins");
    }if(num == 2){
        console.log("Tail wins");
    }
});