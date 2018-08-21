// Global Scope
//
// Variables defined in the global scope are declared outside of a set of curly braces {}, referred to as a block, and are thus available throughout a program. We'll cover more on blocks in subsequent exercises.
const satellite = 'The Moon';
const galaxy = 'The Milky Way';

let stars = 'North Star';

const myNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(myNightSky());

// End Global scope


// Global scope 2---STUDY THIS
//
// const satellite = 'The Moon';
// const galaxy = 'The Milky Way';
//
// let stars = 'North Star';
//
// const myNightSky = () => {
//   return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
// };
//
// console.log(myNightSky());


const satellite = 'The Moon';
const galaxy = 'The Milky Way';

let stars = 'North Star';

const myNightSky = () => {
  stars = 'Sirius';
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(myNightSky());
console.log(stars);
// End Global scope 2




// Block Scope 1 and 2
//
const visibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  console.log(lightWaves);
};

visibleLightWaves();
console.log(lightWaves);


// End #1
//
// Block Scope 2:
//
// const visibleLightWaves = () => {
//   let lightWaves = 'Moonlight';
//   console.log(lightWaves);
// };
//
// visibleLightWaves();
//
const visibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

visibleLightWaves();
// Notice the ouput. Inside the if block console.log(lightWaves) logs the value Northern Lights to the console. Outside the if block, but still within the function, the same statement logs Moonlight to the console.
// End Block Scope 1 and 2
//
//
// Block Scope 3
  const starCount = () => {
  let i = 5;
  console.log(i);
  for (let i = 0; i < 12; i++) {
    console.log(i);
  }
};

starCount();
// console.log(i);    ...throws an error
//
// End Block Scope 3
