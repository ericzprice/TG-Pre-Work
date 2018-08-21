// Arrays
//
let bucketList = ['Rappel into a cave', 'Take a falconry class', 'Learn to juggle'];

console.log(bucketList);

// Create an Array
let newYearsResolutions = ['Climb a new wall', 'Skateboard at a old park', 'Play my guitar'];

console.log(newYearsResolutions);
// End Create an Array
//
//
// Property Access
let newYearsResolutions = ['Climb a new wall', 'Skateboard at a old park', 'Play my guitar'];

let listItem = newYearsResolutions[0];
console.log(listItem);

console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]);
// Try to log the item at position [3] to the console. What is logged to the console?
// 'Play my guitar' in [2] position

// End Property Access
//
//
// Update Elements
let newYearsResolutions = ['Run a marathon', 'Learn a new language', 'Read 52 books'];

newYearsResolutions[1] = "Learn a new language";
console.log(newYearsResolutions)
// End Update Elements
//
//
// Length Property
let newYearsResolutions = ['Run a marathon', 'Learn a new language', 'Read 52 books'];

console.log(newYearsResolutions.length);
// End Length Property
//
//
// push Method
let newYearsResolutions = ['Run a marathon', 'Learn a new language', 'Read 52 books'];

newYearsResolutions.push('Learn to play the harmonica', 'Give a speech');

console.log(newYearsResolutions);

newYearsResolutions.pop();
console.log(newYearsResolutions);
// End push Method
//
//
// More Array Methods
let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
// Use the .shift() method to remove the first item from the array groceryList.

groceryList.unshift('popcorn');
console.log(groceryList);
// Use the .unshift() method to add 'popcorn' to the beginning of your grocery list.

console.log(groceryList.slice(1, 4));
// You want him to pick up the bananas, coffee beans, and brown rice.
// Use .slice() to provide him with a list of these three things.

console.log(groceryList);
// Log the grocery list to the console one more time.
// Notice that the groceryList array still contains the same items it had in Step 2.

// End More Array Methods


// Arrays with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments.push('Pesto');

console.log(condiments);

condiments = ['Soy Sauce'];

console.log(condiments);

utensils.pop();
// Below your code from Step 2, remove the last item from the utensils array using .pop().
console.log(utensils);

console.log(condiments);

utensils = [ 'Fork'];
// Below your code from Step 3, reassign the utensils array to be a new array with only your favorite utensil inside of it.
// You should have received an error!
//
// End Arrays with let and const
//
//
