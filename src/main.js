Browser Compatibility and Transpilation

var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;
// End Browser Compatibility and Transpilation
//
//
// CanIUse.com
// Set the variable below to a number
// Look up the percentage of browsers that support JavaScript ES5. Save the value, as a number, to the variable esFivePercentageSupport.
let esFivePercentageSupport = 95.47;

// Set the variable below to a number
let esSixTemplateLiterals = 87.61;
// End CanIUse.com
//
//
// Why ES6?
var pasta = "Spaghetti"; // ES5 syntax

var meat = "Pancetta"; // ES6 syntax

var sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
// The following line of code is written with ES6 string interpolation:
// `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`
var carbonara = "You can make carbonara with " + pasta + ", " + meat + ", " + " and a sauce made with " + sauce + ".";
// End Why ES6?


// Transpilation With Babel
//Transpilation is the process of converting one programming language to another.
// I couldn't the ES5 code in ./lib/main.js. bc I had trouble with the terminal
"use strict";

var pasta = "Spaghetti"; // ES5 syntax

var meat = "Pancetta"; // ES6 syntax

var sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
var carbonara = "You can make carbonara with " + pasta + ", " + meat + ", and a sauce made with " + sauce + ".";
// End Transpilation With Babel


// npm init
{
  "name": "learning-babel",
  "version": "1.0.0",
  "description": "Use Babel to transpile JavaScript ES6 to ES5",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0"
  }
}
// end npm init


// Install Node Packages
//
files
node_modules
src
main.js
package.json
//
// End Install Node Packages
//
//
// .babelrc
{
  "presets": ["env"]
}
// End .babelrc
//
//
// Babel Source Lib
{
  "name": "ls",
  "version": "1.0.0",
  "description": "Use Babel to transpile JavaScript ES6 to ES5",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1", "build": "babel src -d lib"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0"
  },
  "dependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0"
  }
}
// End Babel Source Lib
//
//
// Build
"use strict";

var pasta = "Spaghetti"; // ES5 syntax

var meat = "Pancetta"; // ES6 syntax

var sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
var carbonara = "You can make carbonara with " + pasta + ", " + meat + ", and a sauce made with " + sauce + ".";
// End Build

// In this lesson, you learned about browser compatibility and transpilation. Let's review the key concepts:
//
// ES5 — The old JavaScript version that is supported by all modern web browsers.
// ES6 — The new(er) JavaScript version that is not supported by all modern web browsers. The syntax is more readable, similar to other programming languages, and addresses the source of common bugs in ES5.
// caniuse.com — a website you can use to look up HTML, CSS, and JavaScript browser compatibility information.
// Babel — A JavaScript package that transpiles JavaScript ES6+ code to ES5.
// npm init — A terminal command that creates a package.json file.
// package.json — A file that contains information about a JavaScript project.
// npm install — A command that installs Node packages.
// babel-cli — A Node package that contains command line tools for Babel.
// babel-preset-env — A Node package that contains ES6+ to ES5 syntax mapping information.
// .babelrc — A file that specifies the version of the JavaScript source code.
// "build" script — A package.json script that you use to tranpsile ES6+ code to ES5.
// npm run build — A command that runs the build script and transpiles ES6+ code to ES5.
// For future reference, here is a list of the steps needed to set up a project for transpilation:
//
// Initialize your project using npm init and create a directory called src
// Install babel dependencies by running
// npm install babel-cli -D
// npm install babel-preset-env -D
// Create a .babelrc file inside your project and add the following code inside it:
// {
//   "presets": ["env"]
// }
// Add the following script to your scripts object in package.json:
// "build": "babel src -d lib"
// Run npm run build whenever you want to transpile your code from your src to lib directories.
