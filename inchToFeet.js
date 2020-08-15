var inch = 156;
console.log(inch);
var feet = inch / 12;
console.log(feet);

// calculaiton using function
function inchToFeet(inchi) {
    var result = inchi / 12;
    return result;
}

var showResult = inchToFeet(100);
console.log(showResult);
var anotherResult = inchToFeet(288);
console.log(anotherResult);
var showAgain = inchToFeet(300);
console.log(showAgain);

// calculation using loop
var senior = [156, 288, 300];
for(var i = 0; i < senior.length; i++)
{
    var showCal = senior[i] / 12;
    console.log(showCal);
}


