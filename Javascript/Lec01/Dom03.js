console.log("Lets Learn about JS selectors...!!");

let rups = document.getElementsByClassName("box");

// for (let index = 0; index < rups.length; index++) {
//     rups[index]
// }

let box = document.getElementById("redbox");
box.style.backgroundColor = "blue";

console.log(document.querySelectorAll(".box"));

// document.querySelector(".box").style.backgroundColor = "yellow";
document.querySelectorAll(".box").forEach((e) => {
  e.style.backgroundColor = "pink";
});
