// var n = 20;
// for (var i = 2; i < n; i++){
//     console.log(i, n % i);
//     if (n % i == 0)
//     {
//         console.log("Not a prime number!!");
//         break;
//     }
//     else{
//         console.log('Yaay Its a prime number!!');
//         break;
//     }
// }

function isPrime(n){
    for (i = 2; i < n; i++){
        // console.log(i, n % i);
        if (n % i == 0)
        {
            return 'Not a prime number!!';
        }
    }
    return 'Yaay its a prime number!!!';
}
var result = isPrime(129);
console.log(result);
