const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


rl.question(`To calculate nth order harmonics, enter order!: `,(num) =>{
fraction=1;
    for(let i=1; i<=num; i++){
        fraction +=1/i; 
    }
    rl.close();
    console.log(num+"th order harmonics is: "+fraction);
});