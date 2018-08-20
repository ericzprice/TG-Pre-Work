// Intro to Functions
let calculatorIsOn = false;

const pressPowerButton = () => {
//     () =>, indicating the variable stores a function. This syntax is known as arrow function syntax. In JavaScript, any code between curly braces is also known as a block.
 if (calculatorIsOn) {
   console.log('Calculator turning off.');
   calculatorIsOn = false;
 } else {
   console.log('Calculator turning on.');
   calculatorIsOn = true;
 }
};

pressPowerButton();
// Output: Calculator turning on.

pressPowerButton();
// Output: Calculator turning off.
//
//End Intro to Functions


// Functions
const takeOrder = () => {
  console.log('Order: pizza')
};

takeOrder();

// End Functions
//
//
// Parameters 1 and 2
const takeOrder = (topping) => {
  console.log('Order: pizza topped with ' + topping);
};

takeOrder('onions');


// Part 2
const takeOrder = (topping, crustType) => {
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('bacon', 'tossed crust');
takeOrder('garlic', 'thin crust');
takeOrder('sausage', 'stuffed crust');
// Browser:
// Order: tossed crust pizza topped with bacon
// Order: thin crust pizza topped with garlic
// Order: stuffed crust pizza topped with sausage

// End Parameters
//
//
// Return 1 and 2
//
// let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('bacon', 'tossed crust');
takeOrder('garlic', 'thin crust');
takeOrder('sausage', 'stuffed crust');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};
// itemCount rather than orderCount Not sure why???

console.log(getSubTotal(orderCount));


// Return 2
//
// let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('bacon', 'tossed crust');
takeOrder('garlic', 'thin crust');
takeOrder('sausage', 'stuffed crust');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};
// Inside the getTax() function, call your getSubTotal() function and pass it the argument itemCount to get the subtotal, and then multiply the returned value by 6% (0.06). Make sure to return the result of this operation.
const getTax = (itemCount) => {
  return getSubTotal(itemCount) * 0.06
}

const getTotal = (itemCount) => {
  return getTax(itemCount) + getSubTotal(itemCount)
}

console.log(getSubTotal(orderCount));

console.log(getTotal(orderCount))

// End Return 1 and 2
//
//
// Function Declarations
function isGreaterThan(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return true;
  } else {
    return false;
  }
}

isGreaterThan(7, 5)

// End Function Declarations


// Function Expressions
//
// Refactor the function declaration to be a function expression using arrow function syntax.
// Be sure to call the function at the end.
//
// function isGreaterThan(numberOne, numberTwo){
//   if(numberOne > numberTwo){
//     return true;
//   } else {
//     return false;
//   }
// }
// isGreaterThan(4, 8)
//
const isGreaterThan = (numberOne, numberTwo) => {
  if(numberOne > numberTwo){
    return true;
  } else {
    return false;
  }
}

isGreaterThan(4, 8)

// End Function Expressions


// Arrow Functions

// Refactor the volumeOfSphere function
//
// const volumeOfSphere = (diameter) => {
//   return (1/6) * Math.PI * diameter * diameter * diameter;
// };
//
// console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');
//
const volumeOfSphere = diameter => (1/6) * Math.PI * diameter * diameter * diameter;


console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');

// End Arrow Functions
