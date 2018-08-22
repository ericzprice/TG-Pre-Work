// Import

import Airplane from './airplane';

// Within the body of the displayFuelCapacity function, use forEach() to iterate over the Airplane.availableAirplanes array.
// The forEach() should take an anonymous function as a parameter. We'll add more in the next step.
function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element){
        // Pass the anonymous function you created in the last step a parameter of element.
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  // Within the displayFuelCapacity function, use console.log() to output the element's name and its fuel capacity.
  });
}

displayFuelCapacity();

// End Import
