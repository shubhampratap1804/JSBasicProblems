const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Enter single digit from 1 to 7!`, (num) =>{
    if(num ==1){
        console.log("Its Monday!");
    }if(num ==2){
        console.log("Its Tuesday!");
    }if(num ==3){
        console.log("Its Wednesday!");
    }if(num ==4){
        console.log("Its Thrusday!");
    }if(num ==5){
        console.log("Its Friday!");
    }if(num ==6){
        console.log("Its Saturday!");
    }if(num ==7){
        console.log("Its Sunday!");
    } else{
        console.log("Enter a valid number!!");
    }
});