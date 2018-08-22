// Named Imports --NEEDS STUDY

import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

// Within the body of the displayStaffStatus() function, use the forEach to iterate over the availableAirplanes array.
// Specifically, the forEach() should take a function as a parameter. The function should in turn take element as a parameter.
function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}

displayStaffStatus();

// End Named Imports
