const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Enter 1, 10, 100, 1,000, 10,000 or 1,00,000: `, (num) =>{
    if(num >=1 && num <10){
        console.log("You have entered a one's digit!");
    }if(num >=10 && num <99){
        console.log("You have entered a ten's digit!");
    }if(num >=100 && num <1000){
        console.log("You have entered a hundred's digit!");
    }if(num >=1000 && num <10000){
        console.log("You have entered a thousand's digit!");
    }if(num >=10000 && num <100000){
        console.log("You have entered a ten-thousand's digit!");
    }if(num >=100000 && num <1000000){
        console.log("You have entered a lakh's digit!");
    }
});