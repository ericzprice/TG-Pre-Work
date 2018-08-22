
//
// ES6 Methods
let person = {
  name: 'Eric',
  age: 45,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',

  sayHello: function() {
    return 'Hello, there!';
  },
 // USE A COMMA RATHER THAN ; AFTER THE {}
 //
 //
  sayGoodbye() {
        // This syntax, which only requires the name of the method and parentheses, is best practice for defining methods.
    return 'Goodbye!';
  }

};

console.log(person.sayHello());

person.hobbies = ['skateboarding', 'juggling'];
person.hobbies = ['skateboarding'];
console.log(person.hobbies);


console.log(person['name']);
console.log(person['age']);

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);
// End ES6 Methods
//
//
// The this Keyword 1
// let person = {
  name: 'Eric',
  age: 45,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',

  sayHello: function() {
    return `Hello, my name is ${this.name }` ;
    // In place of the name here, use this to interpolate your name property.
  },

  sayGoodbye() {
    return 'Goodbye!';
  }

};

console.log(person.sayHello());

person.hobbies = ['skateboarding', 'juggling'];
person.hobbies = ['skateboarding'];
console.log(person.hobbies);


console.log(person['name']);
console.log(person['age']);

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);
// End The this Keyword 1
//
//
// The this Keyword 2
let person = {
  name: 'Eric',
  age: 45,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',

  sayHello: function() {
    return `Hello, my name is ${this.name }` ;
  },

  sayGoodbye() {
    return 'Goodbye!';
  }

};

let friend = {
  name: 'Aaron',
};

friend.sayHello = person.sayHello;

console.log(friend.sayHello());
console.log(person.sayHello());

person.hobbies = ['skateboarding', 'juggling'];
person.hobbies = ['skateboarding'];
console.log(person.hobbies);


console.log(person['name']);
console.log(person['age']);

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);

// Hello, my name is Aaron
// Hello, my name is Eric
// [ 'skateboarding' ]
// Eric
// 45
// Alarm set to 7AM
// It logged your friend's name instead of yours because the meaning of this changed to the friend object, for which the name key is different.
// End The this Keyword 2
//
//
// Getters and Setters 1
let person = {
  _name: 'Lu Xun',
  _age: 137,

  // Let's consider a new person object. We want to add a setter method that changes the age of person.
  // Notice, we already prepended the _age property with an underscore.
  // Start by adding an empty .age() setter method.
  set age(ageIn) {
    if (typeof ageIn === 'number') {
      this._age = ageIn;
    }
    // Inside of the setter we want to check if the user's input is valid. Create a conditional statement to check if a user's input is a number.If the input is a number, set the _age property to the input value. If the input is not a number, return the string, 'Invalid input'.
    else {
      console.log('Invalid input');
      return 'Invalid input';
    }
  }

};

// End Getters and Setters 1
//
//
// Getters and Setters 2
// let person = {
  _name: 'Lu Xun',
  _age: 137,

  set age(ageIn) {
    if (typeof ageIn === 'number') {
      this._age = ageIn;
    }
    else {
      console.log('Invalid input');
      return 'Invalid input';
    }
  }

};

// Under your object, use dot notation to try changing the value of age to the string, 'Thirty-nine'.
person.age = 'Thirty-nine';
person.age = 39;
// End Getters and Setters 2


// Getters and Setters 3
let person = {
  _name: 'Eric',
  _age: 50,

  set age(ageIn) {
    if (typeof ageIn === 'number') {
      this._age = ageIn;
    }
    else {
      console.log('Invalid input');
      return 'Invalid input';
    }
  },
    // Create a getter method for your _age property. Inside the method log the following string and return the value saved to _age:
  get age() {
    console.log(`${this._name} is ${this._age} years old.`);
    return this._age;
  }

};

person.age = 45;
// Eric is 45 years old.
// 
// End Getters and Setters 3
