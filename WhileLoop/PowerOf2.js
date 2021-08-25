const readline = require(`readline`);

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

powerOfTwo = 1;
rl.question(`Enter number from 1 to 8`,(num)=>{
    while(powerOfTwo < 256){
        powerOfTwo = Math.pow(2,num);
        console.log(powerOfTwo);
    }
    rl.close();
});