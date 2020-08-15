// 3! = 1*2*3;
// 7! = 1*2*3*4*5*6*7

// Factorial using for loop
var factorial = 1;
for (var i = 1; i <= 10; i++) {
    factorial = factorial * i;
    console.log(i, factorial);
 }
 
 // Factorial using function
 function checkFactorial(num){
    var factorialCheck = 1;
    for (var i = 1; i <= 10; i++) {
        factorialCheck = factorialCheck * i;
        console.log(i, factorialCheck);
     }
     return factorialCheck;
 }

 var showFactorial = checkFactorial(10);
 console.log(showFactorial);

 // Factorial using while loop
var i = 1;
var factorial = 1;
while (i <= 10){
    factorial = factorial * i;
    console.log(i, factorial);
    i++;
}