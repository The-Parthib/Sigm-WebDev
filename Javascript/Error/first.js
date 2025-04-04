let a = parseInt(prompt("Enter a number"));
let b = parseInt(prompt("Enter another number"));
if (isNaN(a) || isNaN(b)) {
  alert("Please enter valid numbers.");
  throw new SyntaxError("Invalid input: Not a number");
}
let sum = a + b;
try {
    console.log("The sum is: " + sum*xvcb);
} catch (error) {
    console.log("An error occurred:", error);
}
finally {
    console.log("Execution completed.");
}   

// document.body.querySelector("h1").innerText = "The sum is: " + sum;