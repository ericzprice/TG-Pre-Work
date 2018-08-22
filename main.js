// Classes
//
// class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior ++;
  }
}
// Take, for example, an object representing a dog named halley. This dog's name (a key) is "Halley" (a value) and has an age (another key) of 3 (another value). We create the halley object below:
const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
// Halley
// 0
// Halley
// 1
//
// End Classes Intro
//
//
// Constructor
class Surgeon {
  constructor(name, department) {
        // Inside the Surgeon constructor(), create name and department properties and set them equal to your input parameters.
    this._name = name;
    this._department = department;
  }
}
// End Constructor
//
//
// Instance
class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

// we use the new keyword to create an instance of our Dog class.
const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

// End Instance
//
//
// Methods
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  Under the remainingVacationDays getter, create a method called takeVacationDays that accepts one argument named daysOff.

// Inside of the method, subtract daysOff from the number saved to _remainingVacationDays.
// Set _remainingVacationDays to the result.
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
// End Methods
//
//
// Method Calls
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

console.log(surgeonCurry.name);
surgeonCurry.takeVacationDays(3);
// After the call to .takeVacationDays(), use console.log() to print the value saved to the remainingVacationDays property of the surgeonCurry instance.
console.log(surgeonCurry.remainingVacationDays);
//
// End Method Calls
//
//
// Inheritance 2
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  Under the getters, add a method called takeVacationDays.

  This method should accept one argument, called daysOff.

  // Inside the method, subtract daysOff from _remainingVacationDays. Save the result to _remainingVacationDays.
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}
// End Inheritance 2
//
//
// Inheritance 3
// In this exercise, you will begin to create the Nurse class as a child of the HospitalEmployee class. Remember the Nurse class has the following properties and methods:
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
      // In the Nurse constructor, call the parent's constructor method and pass the appropiate value(s).
  constructor(name, certifications) {
    super(name);
    // Inside of the Nurse constructor, and under super, set _certifications.
    this._certifications = certifications;
  }
}
// Under the Nurse class, create a new instance of Nurse and save it to a constant variable named nurseOlynyk. Pass in the following values for each property:
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
// End Inheritance 3
//
//
// Inheritance 4


// End Inheritance 4
