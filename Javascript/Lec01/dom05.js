/*
document.querySelector(".box")
<div class=​"box">​Hey I am a Box..!!​</div>​
document.querySelector(".box").innerHTML
'Hey I am a Box..!!'

document.querySelector(".container").innerText
'Hey I am a Box..!!'
document.querySelector(".box").innerText
'Hey I am a Box..!!'

document.querySelector(".box").innerText = "hello how are you..?\n fine"
'hello how are you..?\n fine'

document.querySelector(".container").outerHTML
'<div class="container">\n        <div class="box">Hey I am a Box..!!</div>\n    </div>'

document.querySelector('.box')
<div class=​"box">​Hey I am a Box..!!​</div>​
document.querySelector('.box').hasAttribute
ƒ hasAttribute() { [native code] }
document.querySelector('.box').hasAttribute('style')
false
document.querySelector('.box2').hasAttribute('style')
true
document.querySelector('.box2').getAttribute
ƒ getAttribute() { [native code] }
document.querySelector('.box2').getAttribute('style')
'display: flex;'


document.querySelector('.container').before(div)

document.querySelector('.container').prepend(div)

document.querySelector('.container').append(div)

document.querySelector('.container').after(div)

document.querySelector('.container').replaceWith(div)

*/

// document.querySelector('.box2').setAttribute('style','display:none')

// let cont = document.querySelector(".container")
// cont.insertAdjacentHTML("beforeend","<b>Hello Guys I'm Parthib")