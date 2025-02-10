let fact = (e) => {
  let result = 1;
  for (let index = e; index > 0; index--) {
    result = index * result;
  }
  return result;
};

console.log(fact(5));
