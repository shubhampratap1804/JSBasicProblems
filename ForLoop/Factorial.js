const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

factorial =1;
rl.question(`Enter number for which you want to calculate factorial: `,(num) =>{
    for(let i=1; i<=num; i++){
        factorial*= i;
    }
    console.log("Factorial of "+num+" is: "+factorial);
    rl.close();
});
