const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Enter a number from 1, 10, 100, 1000, 10000: `,(num) =>{
    switch(num){
        case 1:
            console.log("One's digit!");
            break;
        case 2:
            console.log("Ten's digit!");
            break;
        case 3:
            console.log("Hundred's digit!");
            break;
        case 4:
            console.log("Thousand's digit!");
            break;
        case 5:
            console.log("Tens thousand's!");
            break;
    }
    rl.close();
});