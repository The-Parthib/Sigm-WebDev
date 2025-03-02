console.log("Inside the Advanced JS File...!!")

const a = [1, 6, 4, 3, 2, -4, 0, -1, -12, 7, 34, 12, -8];

const findNeg = (num) => {
    // console.log(num<0);
    return num < 0;
}

const result = a.find(findNeg) //findIndex()
console.log(result);
