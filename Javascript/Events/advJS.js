/*
console.log("Inside the Advanced JS File...!!")

const a = [1, 6, 4, 3, 2, -4, 0, -1, -12, 7, 34, 12, -8];

const findNeg = (num) => {
    // console.log(num<0);
    return num < 0;
}

const result = a.find(findNeg) //findIndex()
console.log(result);
*/

function getCheese(callback) {
  setTimeout(() => {
    let cheese = "🧀";
    console.log("Here is the cheese", cheese);
    callback(cheese);
  }, 2000);
}

function getDough(cheese,callback) {
  setTimeout(() => {
    let dough = cheese + "🫓";
    console.log("Here is the dough", dough);
    callback(dough);
  }, 2000);
}

function getPizza(dough,callback) {
  setTimeout(() => {
    let pizza = dough + "🍕";
    console.log("Here is the Pizza", pizza);
    callback(pizza);
  }, 2000);
}

getCheese((cheese) => {
  getDough(cheese,(dough)=>{
    getPizza(dough,(pizza)=>{
        console.log("Your Hot Pizza is Ready ",pizza)
    })
  })
});


function add(a,b,cb){
  let result = a+b;
  cb(result)
}

// function showResult(result) {
//   console.log(result)
// }

add(2,5,(val) =>  console.log(val) )
add(410,635, (result) => console.log(result))

