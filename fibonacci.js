// fibo[2] = fibo[2 - 1] + fibo[2 - 2];
// fibo[4] = fibo[4 - 1] + fibo[4 - 2];
// fibo[5] = fibo[5 - 1] + fibo[5 - 2];
// fibo[n] = fibo[n - 1] + fibo[n - 2];
// fibo[i] = fibo[i - 1] + fibo[i - 2];

var fibo = [0, 1];

for (var i = 2; i <= 12; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    console.log(fibo[i], fibo[i-1], fibo[i-2]);
}
console.log(fibo);

// Fibonacci using function
function fibonacci(n){
    var fibonaki = [0, 1];
    for (var i = 2; i <= n; i++){
        fibonaki[i] = fibonaki[i - 1] + fibonaki[i - 2];
        //console.log(fibonaki[i], fibonaki[i-1], fibonaki[i-2]);
    } 
    return fibonaki;
}
var showResult = fibonacci(12);
console.log(showResult);