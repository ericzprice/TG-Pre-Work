// Intro to Control Flow
let userName = 'Eric';
let knowsJavaScript = true;

if (knowsJavaScript && userName) {
  console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');
} else if (knowsJavaScript) {
  console.log('Great! Get ready to practice your JavaScript!');
} else if (userName) {
  console.log('Great, ' + userName + '! Get ready to learn something new!');
} else {
  console.log('Great! Get ready to learn something new!');
}
// End Intro to Control Flow
//
//
// if/else statements
// Write an if/else statement that uses isSoccerFan as its condition. If it is true, then log, Goal!. If it is false, then log, No goal!.
let isSoccerFan = true;
if (isSoccerFan === true) {
  console.log('Goal!');
} else {
  console.log('No goal!');
}
// End if/else statements
//
//
//True and False Values 1 and 2
// let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 'You dropped your smile!';

if (!favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
// End True and False Values


// Comparison Operators 1 and 2
let hungerLevel = 5;
if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log("We can eat later!");
}

let hungerLevel = 10;
if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log("We can eat later!");
}

// Part 2
let moonPhase = 'full';

if (moonPhase === 'full') {
  console.log('Howl!');
} else {
  console.log('I swear I am not a werewolf.');
}
// End Comparison Operators


// else if Statements
let moonPhase = 'full';

if (moonPhase === 'full') {
  console.log('Howl!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}

// #2
let moonPhase = 'mostly full';

if (moonPhase === 'full') {
  console.log('Howl!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}

// #3
let moonPhase = 'mostly new';

if (moonPhase === 'full') {
  console.log('Howl!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}

// #4
let moonPhase = 'solar eclipse';

if (moonPhase === 'full') {
  console.log('Howl!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}
// End else if Statements
//
//
// Logical Operators

let moonPhase = 'solar eclipse';
let isFoggyNight = true;

if (moonPhase === 'full') {
  console.log('Howl!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}

// #2 -- returns "Invalid moon phase"
let moonPhase = 'full';
let isFoggyNight = true;

if (moonPhase === 'full' && isFoggyNight === true) {
  console.log('Howl!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}

// #3
let moonPhase = 'full';
let isFoggyNight = false;

if (moonPhase === 'full' && isFoggyNight === true) {
  console.log('Howl!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}

// #4
let moonPhase = 'full';
let isFoggyNight = false;

if (moonPhase === 'full' || isFoggyNight === true) {
  console.log('Howl!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}
//The first block is executed
//
// End Logical Operators
//
// switch statements default at the end
let moonPhase = 'full';

switch (moonPhase) {
  case 'full':
    console.log('Howl!');
    break;
  case 'mostly full':
    console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new':
    console.log('Back on two feet');
    break;
  default:
    console.log('Invalid moon phase');
    break;
}
// default at the end is the 'else'
//
//
// end switch Statements
//
//
// Ternary Operator
let isLocked = false;

if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}

let isCorrect = true;

if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}


// Refactored to:
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');


let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");
// End Ternary Operator
