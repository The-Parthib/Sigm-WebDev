let check = Math.random();
console.log(check);

let a = prompt("Enter First Number : ");
let b = prompt("Enter Second number : ");
let c = prompt("Enter Operationd [+ , - , * , / ] : ");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "*",
};

if (check > 0.7) {
  alert("Real Calculator");
  alert(`The Result is : ${eval(`${a} ${c} ${b}`)}`);
} else {
  c = obj[c];
  alert(`The Result is : ${eval(`${a} ${c} ${b}`)}`);
}
