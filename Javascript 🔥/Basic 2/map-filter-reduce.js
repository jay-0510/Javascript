//MAP:
//The map() method creates a new array with the results of calling a provided function on every element in the calling array. For example, the following code uses the map() method to double the elements of the array numbers:
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map((i) => {
    return i * 2;
});
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//Fiter() ----
//The filter() is a really interesting and easy method, it creates a new array with all elements that pass the test implemented by the provided function.
let xxx = [1, 2, 3, 4, 5];
let filteredNumbers = xxx.filter((i) => {
    return i > 3;
});
console.log(filteredNumbers); // [4, 5]


//reduce() ---
//The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. For example, the following code uses the reduce() method to sum the elements of the array numbers:
let aa = [1, 2, 3, 4, 5];
let sum = aa.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15




//Eg:--
let arr = [45, 23, 21]
// Array map method
let a = arr.map((value, index, array) => {
  // console.log(value, index, array)
  return value + index
})
// console.log(arr)

// Array filter method
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((a) => {
  return a < 10
})
// console.log(a2, arr2)

// Array reduce method
let arr3 = [1, 2, 3, 5, 2, 1]
const reduce_func = (h1, h2) => {
  return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)