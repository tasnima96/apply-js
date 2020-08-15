console.log(2020 / 4);

const year = 2020;
let reminder = year % 4;
if (reminder == 0){
    console.log('It is a leap year!!!');
}
else{
    console.log('Sorry not a leap year!!!');
}

function checkLeapYear(givenYear){
    let reminder = year % 4;
    if (reminder == 0){
    return true;
}
else{
    return false;
}
}
const showResult = checkLeapYear(2000);
console.log(showResult);