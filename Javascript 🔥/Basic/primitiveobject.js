//Primitive Objects
//In JavaScript, there are 7 primitive data types. The primitive data types are fundamental data types that are built into JavaScript. A good trick to remember these 7 data types is "NNSSBBU":

//N - null
//N - number
//S - symbol
//S - string
//B - boolean
//B - bigint
//U - undefined

// nn bb ss u - Primitives in Js
let a = null;
let b = 345;
let c = true; // can also be false  -- Boolean (True or False)
let d = BigInt("567") + BigInt("3")
let e = "Ronaldo"
let f = Symbol("I am a nice symbol")
let g
console.log(a, b, c , d, e, f, g)
console.log(typeof c)

// Non Primitive Data Type - Objects in Js
const item = {
  "Ronaldo": true,
  "Messi": false,
  "Mbappe": 67,
  "Neymar": undefined
}
console.log(item["Messi"])
