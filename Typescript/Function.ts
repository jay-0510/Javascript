// Function & Types 
function add(a: number, b: number)  {
     return a + b; 
    }

function print(value: any) {
    console.log(value)
}

"If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned"

function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
  }
  
  console.log(divide({dividend: 10, divisor: 2}));