console.log("Lets Learn about JS selectors...!!");

let rups = document.getElementsByClassName("box");

// for (let index = 0; index < rups.length; index++) {
//     rups[index]
// }

let box = document.getElementById("redbox");
box.style.backgroundColor = "blue";

console.log(document.querySelectorAll(".box"));

// document.querySelector(".box").style.backgroundColor = "yellow";

//queryselector all returns a a list;

// document.querySelectorAll(".box").forEach((e) => {  
//   e.style.backgroundColor = "green";
// });

console.log(rups[2].matches("#redbox"));
console.log(rups[2].matches(".box"));
// console.log(rups[2].matches("box")) 
// it needs # and . for ids and classes

let bool = document.querySelector(".container").contains(rups[1]);
console.log(bool);