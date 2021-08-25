let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter month and date seperated by a comma: ",function(date,month) {    
    if((month == 3 && date >=20) || (month == 6 && date <= 20)){
        console.log("True");
    }if (month > 3 && month < 6){
        console.log("True");
    }else{
        console.log("False");
    }
    process.exit();
});
