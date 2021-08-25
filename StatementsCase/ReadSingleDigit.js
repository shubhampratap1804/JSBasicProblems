const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Enter a single digit number: `,(num) =>{
    switch(num){
        case 0:
            console.log("You have entered zero!");
            break;
        case 1:
            console.log("You have entered one!");
            break;
        case 2:
            console.log("You have entered two!");
            break;
        case 3:
            console.log("You have entered three!");
            break;
        case 4:
            console.log("You have entered four!");
            break;
        case 5:
            console.log("You have entered five!");
            break;
        case 6:
            console.log("You have entered six!");
            break;
        case 7:
            console.log("You have entered seven!");
            break;
        case 8:
            console.log("You have entered eight!");
            break;
        case 9:
            console.log("You have entered nine!");
            break;
    }
    rl.close();
});