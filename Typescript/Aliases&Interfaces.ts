// Type Interference 
//Interfaces are similar to type aliases, except they only apply to object types.
// Try creating a new interface using it below
interface Rectangle {
    height: number,
    width: number
  };
  
  const rectangle: Rectangle = {
    height: 20,
    width: 10
  };
  console.log(rectangle);

let course = 'Education -- The Sex Education'
// Course = 1234;

"Extending an interface means you are creating a new interface with the same properties as the original, plus something new."


// Aliases
// Used for strings ..... & more complex  data structures like objects and arrays.
//Aliases and Interfaces allows types to be easily shared between different variables/objects.

type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
};

const carYear: CarYear = 2000
const carType: CarType = "Mercedes"
const carModel: CarModel = "Mercedes G-Wagon"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

console.log(car);