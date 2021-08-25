const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Enter 1 to convert from feet to inches! \n +
            Enter 2 to convert from inches to feet! \n +
            Enter 3 to convert from feet to meter! \n +
            Enter 4 to convert from meter to feet!`,(num) =>{
    switch(num){
        case 1:
            r1.question(`Enter feet value: `,(value) =>{
                let inch = value * 12;
                console.log(value+" feet is equal to: "+inch);
            });
            break;
        case 2:
            r1.question(`Enter inches value: `,(value) =>{
                let feet = value / 12;;
                console.log(value+" inches is equal to: "+feet);
            });
            break;
        case 3:
            r1.question(`Enter feet value: `,(value) =>{
                let meter = value / 3.28;
                console.log(value+" feet is equal to: "+meter);
            });
            break;
        case 4:
            r1.question(`Enter meter value: `,(value) =>{
                let feet = value * 3.28;
                console.log(value+" meter is equal to: "+feet);
            });
            break;
    }
    rl.close();
});