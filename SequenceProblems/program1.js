//UC1
const IS_ABSENT =0;
//UC2
const IS_PART_TIME =1;
const IS_FULL_TIME =2;
const PART_TIME_HOURS =4;
const FULL_TIME_HOURS =8;
const WAGE_PER_HOUR =20;
let EMP_HOURS =0;
let emp_check = Math.floor(Math.random() * 10) % 3;
switch(emp_check){
    case IS_FULL_TIME:
        EMP_HOURS = FULL_TIME_HOURS;
        console.log("Total full-time daily wage: "+FULL_TIME_HOURS*WAGE_PER_HOUR);
        break;
    case IS_PART_TIME:
        EMP_HOURS = PART_TIME_HOURS;
        console.log("Total part-time daily wage is: "+PART_TIME_HOURS*WAGE_PER_HOUR);
        break;
    case IS_ABSENT:
        console.log("Employee is absent total wage is: "+0);
}

