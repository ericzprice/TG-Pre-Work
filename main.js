// .filter()
let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below

let smallNumbers = randomNumbers.filter(num => num < 250);

console.log(smallNumbers);
// [ 200, 3.14, 7, 13 ]

// 2.
let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

let longFavoriteWords = favoriteWords.filter(word => word.length > 7);
// Refactor the code above using arrow function syntax
console.log(longFavoriteWords);
// [ 'nostalgia', 'hyperbole', 'esoteric' ]
//
//
// End .filter()
//
//
// Iterator Documentation
let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
// In the code editor, there is an array called words. We want to create a new array of interesting words. The first thing we want to do is check if there are words that are fewer than 6 characters long. There is something missing in the words.some() method call. Fix this method so that true is printed to the console.

console.log(words.some(function(word) {
  return word.length < 6;
}));
// True
// Use filter to create a new array

let interestingWords = words.filter(word => word.length > 5);
// The method returned true, which means there are some words in the array that are shorter than six characters. Use the .filter() method to save any words longer than 5 characters to a new array called interestingWords, declared with let.
console.log(interestingWords);
// [ 'unique', 'uncanny', 'oxymoron' ]
//
console.log(interestingWords.every(word =>  word.length > 5));
// True
// End Iterator Documentation
//
//
// Choose the Right Iterator

let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

let nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));
// Have you visited Nashville?
// Have you visited Charlotte?
// Have you visited Asheville?
// Have you visited Austin?
// Have you visited Boulder?

// Choose a method that will return a new array
let longCities = cities.filter(city => city.length > 7);
console.log(longCities);
 // 'Nashville', 'Charlotte', 'Asheville' ]
 //
// Choose a method that will return a new array
let smallerNums = nums.map(num => num - 5);
 console.log(smallerNums);
 // [-4, 45, 70, 195, 345, 520, 995 ]
 //
// Choose a method that will return a boolean value
nums.every(num => num < 0);
// End Choose the Right Iterator
