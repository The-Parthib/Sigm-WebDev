let arr = [1, 43, 6, 53, 76, 11, 12];

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

let newArr = [];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element ** 2)
}
console.log(arr);
console.log(newArr);