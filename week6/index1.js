//ASSIGMENT1
function sum(num1, num2){
    let sumOfResult = num1 + num2
    console.log(sumOfResult)
}
sum(10,2);

function minus(num1,num2) {
    let minusOfResult = num1 - num2
    console.log(minusOfResult)
}
minus(10,2);

function multiply(num1,num2) {
    let multiplyOfResult = num1 * num2
    console.log(multiplyOfResult)
}
multiply(10,2);

function square(a,b) {
   let squareOfResult = a*a +2*a*b + b*b
   return squareOfResult
}
let result = square(10,2);
console.log(result)

function divide(num1,num2) {
    let divideOfResult = num1/num2
    console.log(divideOfResult)
}
divide(10,2);

//fibonacci series
function fibonacci(n) {
    let a=0;
    let b =1;
    let z;
    let i = 0;
    console.log('fibonacci series are:');
    for(i=0; i<=n; i++) {
        console.log(a);
        z = a + b;
        a=b;
        b=z;
    }
}
console.log(fibonacci(8));