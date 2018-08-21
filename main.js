// Loops
let cookies = ['chocolate chip', 'raisin', 'macadamia nut', 'sugar'];

for (let i = 0; i<cookies.length; i++) {
  console.log('I would love to eat a ' + cookies[i] + ' cookie right now!');
}
// I would love to eat a chocolate chip cookie right now!
// I would love to eat a raisin cookie right now!
// I would love to eat a macadamia nut cookie right now!
// I would love to eat a sugar cookie right now!
//
// End Loops
//
//
// Looping Manually

let vacationSpots = ['Paris', 'Italy', 'Porto'];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

for (let i = 0; i<vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i] + ' soon!');

// End Looping Manually
//
//
// for Loops
let vacationSpots = ['Paris', 'Italy', 'Porto'];

for (let vacationSpotIndex = 0; vacationSpotIndex < vacationSpots.length; vacationSpotIndex++) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}
// End for Loops
//
//
// for Loops, Backwards
let vacationSpots = ['Paris', 'Italy', 'Porto'];

for (let vacationSpotIndex = vacationSpots.length - 1; vacationSpotIndex >= 0; vacationSpotIndex--) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}
// Because arrays start counting at 0, the start condition needs to be the length of the vacationSpots array minus 1.
//
// End for Loops, Backwards


// Nested for Loops!!!
let myPlaces = ['Kansas', 'Taos', 'Springfield'];

let friendPlaces = ['Taos', 'Charlotte', 'Asheville'];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
		if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
      console.log(friendPlaces[friendPlacesIndex]);
    }
  }
}
// 5.
// Look what printed to the console. Your first place printed, then all three of your friend's. Then your second place, then your friend's places again. Finally, your third place printed and all three of your friend's places printed a final time.
//
// This is because the inner for loop runs completely every time the outer for loop runs once!!!!
//
// The purpose of the program is to see what you and your friend have in common. Let's utilize the === comparison with an if statement.
//
// Delete the two console.log() statements you wrote in the previous steps.
//
// Inside the second for loop's block, write an if statement that checks if myPlaces[myPlacesIndex] is equal to friendPlaces[friendPlacesIndex]. If it is, log to the console the place you have in common.
// End Nested for Loops


// while Loops
let cards = ['Diamond', 'Spade', 'Heart', 'Club'];

let currentCard = 'Heart';

while (currentCard !== 'Spade') {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() *4)];
  // This code will generate a random number between 0 and 3, the range of indices of the cards array, and reassign currentCard to a new card from that array. Because the while loop only runs if the card is NOT a Spade, the value of currentCard will only be logged to the console if it is not 'Spade'.
}

console.log('You found a spade!');
// End while Loops


// Infinite Loops
let flag = true;
let counter = 0;
while(flag === true){
  console.log(counter);
  counter+=1;
  if (counter === 37){
    break;
  }
}
// This code will terminate the while loop, with the break keyword, when the condition counter === 37 is met. Without this code the while loop would run infinitely because there is no condition stated to "break" the loop.
// End Infinite Loops
