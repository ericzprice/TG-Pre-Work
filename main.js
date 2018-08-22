// Objects: 1
let person = {
  name: 'Eric',
  age: 45
};
// End Objects: 1
//
//
// Accessing Object Properties 1
let person = {
  name: 'Eric',
  age: 45
};
console.log(person.name);
console.log(person.age);
// End Accessing Object Properties 1
//
//
// Accessing Object Properties 2
let person = {
  name: 'Eric',
  age: 45
};
console.log(person['name']);
console.log(person['age']);
// End Accessing Object Properties 2
//
//
// Accessing Object Properties 3
let person = {
  name: 'Eric',
  age: 45,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
};

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
// End Accessing Object Properties 3
//
//
// Adding a Property
let person = {
  name: 'Eric',
  age: 45,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
};

person.hobbies = ['Guitar', 'Magic tricks'];
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

// End Adding a Property
//
//
// Editing a Property
let person = {
  name: 'Eric',
  age: 45,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
};

person.hobbies = ['Guitar'];
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

// End Editing a Property
//
//
// Methods
let person = {
  name: 'Eric',
  age: 45,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: () => {
    return 'Hello, there!';
  }
};

console.log(person.sayHello());

person.hobbies = ['Basketball', 'Coaching'];
person.hobbies = ['Basketball'];
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
//
// End Methods
