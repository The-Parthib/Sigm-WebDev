/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

let tip = Math.random();
let first, second, third;

// First

if (tip < 0.33) {
  first = "Crazy";
} else if (tip < 0.66 && tip <= 0.33) {
  first = "Amazing";
} else {
  first = "Fire";
}

// Second

if (tip < 0.33) {
  second = "Engine";
} else if (tip < 0.66 && tip <= 0.33) {
  second = "Foods";
} else {
  second = "Garments";
}

// Third

if (tip < 0.33) {
  third = "Bros";
} else if (tip < 0.66 && tip <= 0.33) {
  third = "Limited";
} else {
  third = "Hub";
}

console.log(`${first} ${second} ${third}`);
