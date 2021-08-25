const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const r3 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Enter first number:`,(a) =>{
    r2.question(`Enter second number: `,(b) =>{
        r3.question(`Enter third number: `,(c)=>{
            let eq1 = a+b*c;
            let eq2 = c+a/b;
            let eq3 = a%b+c;
            let eq4 = a*b+c;
        
            if(eq1 > eq2 && eq1 > eq3 && eq1 > eq4){
                console.log("Equation 1 is maximum!");
            }if(eq2 > eq1 && eq2 > eq3 && eq2 > eq4){
                console.log("Equation 2 is maximum!");
            }if(eq3 > eq1 && eq3 > eq2 && eq3 > eq4){
                console.log("Equation 3 is maximum!");
            }if(eq4 > eq1 && eq4 > eq2 && eq4 > eq3){
                console.log("Equation 4 is maximum!");
            } 
            if(eq1 < eq2 && eq1 < eq3 && eq1 < eq4){
                console.log("Equation 1 is minimum!");
            }if(eq2 < eq1 && eq2 < eq3 && eq2 < eq4){
                console.log("Equation 2 is minimum!");
            }if(eq3 < eq1 && eq3 < eq2 && eq3 < eq4){
                console.log("Equation 3 is minimum!");
            }if(eq4 < eq1 && eq4 < eq2 && eq4 < eq3){
                console.log("Equation 4 is minimum!");
            }
        });
    });
    rl.close();
});