const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Enter a single digit number: `,(num) =>{
    switch(num){
        case 1:
            console.log("Its Monday!");
            break;
        case 2:
            console.log("Its Tuesday!");
            break;
        case 3:
            console.log("Its Wednesday!");
            break;
        case 4:
            console.log("Its Thrusday!");
            break;
        case 5:
            console.log("Its Friday!");
            break;
        case 6:
            console.log("Its Saturday!");
            break;
        case 7:
            console.log("Its Sunday!");
            break;
    }
    rl.close();
});