const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the year: ', (year) => {
  if(year % 400 == 0){
      console.log(year+" is a leap year!");
  } if(year % 100 ==0 && year % 4 ==0){
    console.log(year+" is a leap year!");
  } if(year % 100!=0 && year % 4 ==0){
    console.log(year+" is a leap year!");
  }else{
      console.log(year+" is not a leap year!");
  }
});