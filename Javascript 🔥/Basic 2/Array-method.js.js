//Arrays MEthods---
// //1. Push method: Add element to the end of array
let arr = [1, 2];
arr.push(3);
console.log(arr); //[1, 2, 3]


// //2. Pop method : Remove last element from an array and return it
let fruits = ['apple', 'banana'];
let removedFruit = fruits.pop();
console.log(fruits); //['apple']
console.log(removedFruit); //'banana'


// //3. Shift Method: remove first element from an array and returns that removed element
let numbers = [50, 60, 70];
let shiftedNumber = numbers.shift();
console.log(numbers); //[60, 70]
console.log(shiftedNumber); //50


// //4. UnShift method: add elements at beginning of array
let colors = ['red', 'blue'];
colors.unshift('yellow');
console.log(colors); //['yellow','red', 'blue']


// //5. Slice method: Extract part of an array
let letters = ['a', 'b', 'c', 'd', 'e'];
let newLetters = letters.slice(1, 3);
console.log(newLetters); //['b', 'c']


// //6. Splice method: change/add/remove elements in any position of array
let numArr = [10, 20, 30, 40, 50];
numArr.splice(2, 0, "hello");
console.log(numArr); //[10, 20,'hello', 30, 40, 50]


// //7. Sort method: sort array in ascending order
let scores = [90, 80, 70, 60, 50];
scores.sort((a, b) => a - b);
console.log(scores); //[50, 60, 70, 80, 90]


// //8. Reverse method: reverse the order of array
let students = ["John", "Jane", "Alice"];
students.reverse();
console.log(students); //["Alice","Jane","John"]


//Delete
let GF = ["Apple", "Orange", "Banana"];
delete GF[1];
console.log(GF); // ["Apple", <1 empty item>, "Banana"]

//Concat :
let hie = ["Apple", "Orange", "Banana"];
let vegetables = ["Potato", "Tomato", "Onion"];
let food = hie.concat(vegetables);
console.log(food); // ["Apple", "Orange", "Banana", "Potato", "Tomato", "Onion"]


//Indexof Method :
let kk = ["Apple", "Orange", "Banana"];
let index = kk.indexOf("Banana");
console.log(index); // 2

//Sort Method:
let ooo = [10, 20, 30, 40, 50];
ooo.sort();
console.log(ooo); // [10, 20, 30, 40, 50]
