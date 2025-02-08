/*
let arr = [1, 2, 3, 4, 5, 7];
// arrays arte mutable
console.log(arr);
console.log(arr.length);
// arr[0] = 5666;
arr.push('Rupsa')

console.log(arr);
console.log(arr[0])
arr.unshift('Parthib')
console.log(arr);
delete arr[3];
console.log(arr[3]);
*/

let a1 = [1,2,3,4,5,6];
let a2 = ['Parthib',8,9,10];
let a3 = ['beautiful','sundor','Rupsa'];

let a4 = a1.concat(a2,a3)

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
a1.splice(1,3,'marry me','Rupsa')
console.log(a1)