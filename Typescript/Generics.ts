//GENERICS ----
//allows creating 'type variables' can be used to create classes, functions.
//TYPE ALIASES - dont need to explicitily define the type they use.
//Generics makes it easier to write reusable code.
"TypeScript can also infer the type of the generic parameter from the function parameters."
"TypeScript can also infer the type of the generic parameter if it's used in a constructor parameter."

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);  // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], "d");   // ["d",

// updatedArray[0].split(''): any[] -> ERROR because we are trying to call split on a number!


// Generics help to write functions, which are type safe yet flexible  (can work with multiple types).
// They make our application more robust and prevent