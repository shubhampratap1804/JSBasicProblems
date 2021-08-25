const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


rl.question(`Enterlower range!: `,(lowRange) =>{
    r1.question(`Enter upper range!`,(highRange) =>{
        for(let i = lowRange; i<=highRange; i++){
            for(let y =1; y<=highRange/2; y++){
                if(i % y != 0)
                console.log(i+" is a prime number! ");
            }
        }
    });
    r1.close();
    rl.close();
});