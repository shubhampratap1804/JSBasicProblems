const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question(`Enter number for which you want to calculate factors: `, (num) =>{
    for(let i=1; i<=num/2; i++){
        if(num % i ==0)
        console.log("Factors of "+num+" are: "+i);
    }
});