//  let boxes = document.getElementsByClassName("box");

//boxes is a HTML Collection and forEach method is not for html collection it works on array only. For that purpose we need to make a array from this HTML collection

// method 1

let boxes = document.querySelector(".container").children;

function getRandomColor() {
  let v1 = Math.ceil(0 + Math.random() * 255);
  let v2 = Math.ceil(0 + Math.random() * 255);
  let v3 = Math.ceil(0 + Math.random() * 255);

  return `rgb(${v1},${v2},${v3})`;
}

// method 2
Array.from(boxes).forEach((e) => {
  e.style.backgroundColor = getRandomColor();
  e.style.color = getRandomColor();
});
