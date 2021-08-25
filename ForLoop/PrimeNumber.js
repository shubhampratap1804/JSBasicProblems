const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


rl.question(`Enter a number to check whether is prime or not!: `,(num) =>{
    for(let i=1; i<=num/2; i++)
        if(num % i == 0)
            console.log(num+" is not a prime number!");
    console.log(num+" is a prime number!");
    rl.close();
});