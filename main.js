// Intro to Iterators
let artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(function(artist) {
  console.log(artist + ' is one of my favorite artists.');
});

let numbers = [1, 2, 3, 4, 5];

let squareNumbers = numbers.map(function(number) {
  return number * number;
});

console.log(squareNumbers);

let things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

let onlyNumbers = things.filter(function(thing) {
  return typeof thing === 'number';
});

console.log(onlyNumbers);
// End Intro to Iterators


// .forEach()
let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(function(fruit) {
  console.log(' I want to eat a ' + fruit);
});

// Refactor the .forEach() call you just wrote using arrow function syntax instead.
fruits.forEach(fruit => console.log('I want to eat a ' + fruit));
// End .forEach()
//
//
// .map()
let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

let secretMessage = animals.map(animal => animal.charAt(0));

console.log(secretMessage.join(''));

let bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below

let smallNumbers = bigNumbers.map(function(number) {
  return number / 100;
});
// Prints out...
// HelloWorld   ...from all the 1st letters of animals

// Refactor the method call from Step 1 using arrow function syntax.
let smallNumbers = bigNumbers.map(num => num/100);
console.log(smallNumbers);
// Prints out...
// [ 1, 2, 3, 4, 5 ]
// End .map()


// .filter()
let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below

let smallNumbers = randomNumbers.filter(num => num < 250);

console.log(smallNumbers);
// [ 200, 3.14, 7, 13 ]

// 2.
let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

let longFavoriteWords = favoriteWords.filter(word => word.length > 7);

console.log(longFavoriteWords);
// [ 'nostalgia', 'hyperbole', 'esoteric' ]

// Refactor the code above using arrow function syntax
