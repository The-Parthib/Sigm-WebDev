// let button = document.getElementById("btn");
let button = document.querySelector("#btn");

button.addEventListener('click',(e)=>{
    document.querySelector(".box").innerHTML = "<b> Button Clicked </b> <br> Enjoy your click"
    button.style.backgroundColor = 'yellow'
    console.log(e)
})
button.addEventListener('keydown',(e)=>{
    document.querySelector(".box").innerHTML = "<b> Button Clicked </b> <br> Enjoy your click"
    button.style.backgroundColor = 'yellow'
    console.log(e.key,e.keyCode)
})