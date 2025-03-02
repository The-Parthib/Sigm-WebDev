/*
console.log("Hello I'm Parthib");
console.log("Hii.. I'm Rupsa");

setTimeout(() => {
  console.log("Inside setTimeOut()");
}, 2000);

console.log("The End"); 
*/

//  .. ++++++++++ = callback Function = +++++++++++++++++

// main Function
const calculate = (a, b, operation) => operation(a, b);

//method 1
const additionL = calculate(9, 4, function (num1, num2) {
  return num1 + num2;
});

console.log(`The result is ${additionL}`);

//  method 2

const addition = (c, d) => c + d;
const substraction = (c, d) => c - d;
function multi(c, d) {
  //just another way to write the function
  return c * d;
}
const devide = (c, d) => c / d;
const power = (c, d) => c ** d;

console.log("The JogFol is :", calculate(154, 19, addition));
console.log("The BiyogFol is :", calculate(154, 19, substraction));
console.log("The GunFol is :", calculate(154, 19, multi));
console.log("The VagFol is :", calculate(154, 19, devide));
console.log("The power is :", calculate(154, 19, power));
