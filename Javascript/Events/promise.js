console.log("Welcome to promises..!!");

let prom1 = new Promise((resolve, reject) => {
  let r = Math.random();
  if (r > 0.5) {
    reject("random number can not be accepted...!! Please keep Reloading");
  } else
    setTimeout(() => {
      console.log("Yes I'am done");
      resolve("Rupsa");
    }, 3000);
});

let prom2 = new Promise((resolve, reject) => {
  let r = Math.random();
  if (r > 0.5) {
    reject("random number can not be accepted...!! Please keep Reloading");
  } else
    setTimeout(() => {
      console.log("Yes I'am done 2");
      resolve("Rupsa loves me 2");
    }, 1000);
});


/*
prom1.then((a) => {
    console.log(a);
}).catch((e) => console.log(e));
*/

let p3 = Promise.all[prom1,prom2]