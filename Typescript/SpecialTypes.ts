// The deafault type is assumed is the "ANY" type.
// "Any" means that this field can hold any value.
// "ANY" is a type that disables type checking & efffectively allows all types to be used.

let y: undefined = undefined;
console.log(typeof y);

let z: null = null;
console.log(typeof z);

// Undefined and null are types that refer to the JavaScript primitives 

// "NEVER" is rarely used, its primary used in advanced generics.
type Never = never;




