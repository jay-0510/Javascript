// OBJECTS TYPESCRIPT -- 

// In TypeScript, objects are represented using interfaces.
// An interface is a way to describe the properties of an object. It can be used to  define a type for an object that will have certain

const gadi: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Fortuner",
    year: 2005
  };
  
  console.log(gadi);

// Optional properties are those don't have to be defined in the object definition......
  const baby: { type: string, mileage?: number } = { // no error
    type: "BMW"
  };
  baby.mileage = 2000;