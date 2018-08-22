//Modules
// module.exports
const Airplane = {};
// Within the same file, add a property to the Airplane object named myAirplane and set it equal to "StarJet".
Airplane.myAirplane = "StarJet";

module.exports = Airplane;
// end module.exports


// require()
const Airplane = require('./1-airplane.js');
// In 1-missionControl.js use the require() function to import the Airplane module from 1-airplane.js.
// Recall that you will need to use the precise name of the file that contains the module.

function displayAirplane() {
  console.log(Airplane.myAirplane);
}
// In 1-missionControl.js, define a function displayAirplane(). In the function, log the value of the module and its property to the console.

displayAirplane();
// End require()
//
//
