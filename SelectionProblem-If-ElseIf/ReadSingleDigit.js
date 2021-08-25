const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Enter a single digit number: `,(num) =>{
    if(num == 0){
        console.log("You have entered zero!");
    }if(num == 1){
        console.log("You have entered one!");
    }if(num == 2){
        console.log("You have entered two!");
    }if(num == 3){
        console.log("You have entered three!");
    }if(num == 4){
        console.log("You have entered four!");
    }if(num == 5){
        console.log("You have entered five!");
    }if(num == 6){
        console.log("You have entered siz!");
    }if(num == 7){
        console.log("You have entered seven!");
    }if(num == 8){
        console.log("You have entered eight!");
    }if(num == 9){
        console.log("You have entered nine!");
    }
});