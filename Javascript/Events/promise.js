console.log("Welcome to promises..!!");

let prom1 = new Promise((resolve, reject) => {
  let r = Math.random();
  if (r > 0.5) {
    reject("From promise 1...!! Please keep Reloading");
  } else
    setTimeout(() => {
      console.log("Yes I'am done");
      resolve("Rupsa");
    }, 2000);
});

let prom2 = new Promise((resolve, reject) => {
  let r = Math.random();
  if (r > 0.5) {
    reject("From promise 2...!! Please keep Reloading");
  } else
    setTimeout(() => {
      console.log("Yes I'am done 2");
      resolve("Rupsa loves me 2");
    }, 4000);
});


/*
prom1.then((a) => {
    console.log(a);
}).catch((e) => console.log(e));
*/

let p3 = Promise.all([prom1,prom2]);
p3.then((a) => {
  console.log(a);
}).catch((e) => console.log(e));


let p4 = Promise.allSettled([prom1,prom2]);
p4.then((a) => {
  console.log(a);
}).catch((err) => console.log(err));

let p5 = Promise.race([prom1,prom2]);
p5.then((a) => {
  console.log(a);
}).catch((err) => console.log(err));