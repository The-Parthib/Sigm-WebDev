// let fact = (e) => {
//   let result = 1;
//   for (let index = e; index > 0; index--) {
//     result = index * result;
//   }
//   return result;
// };

// reccursion function
let fact = (e) => {
  if (e == 0 || e == 1) {
    return 1;
  }
  return e * fact(e - 1);
}

console.log(fact(5));
