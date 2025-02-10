let arr = [1, 13, 6, 53, 76, 11, 12];

// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   console.log(element);
// }

// arr.forEach((value , index , array) => {
//     console.log(value,index,array)
// });

// let obj = {
//     a:1,
//     b:2,
//     c:3
// }
// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         // console.log(key,element)
//     }
// }

// for (const element of arr) {
//     console.log(element,"-->arr")
// }

// let newArr = [];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element ** 2)
// }
// console.log(arr);
// console.log(newArr);

// let newArr = arr.map((e) => {
// //   console.log(e,"TM");
//     return e**2;
// });

// console.log(newArr);

// const greaterThan = (e)=>{
//     if (e>8) {
//         return true;
//     }
//     return false;
// }
// console.log(arr.filter(greaterThan))

let arr2 = [1,2,3,4,5];
 const red = (a,b)=>{
    return a+b;
 }
 console.log(arr2.reduce(red))