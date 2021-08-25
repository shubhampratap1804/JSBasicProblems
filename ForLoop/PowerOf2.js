const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


rl.question(`To calculate nth power of 2, enter exponent!: `,(num) =>{
powerOfTwo =1;
    for(let i=1; i<=num; i++){
        powerOfTwo *= 2;
    }
    rl.close();
    console.log(num+"th power of 2 is: "+powerOfTwo);
});
