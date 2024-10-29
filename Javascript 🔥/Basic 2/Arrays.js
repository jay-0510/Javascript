//Arrays:
//Arrays are a way to store multiple values in a single variable. They are very useful when you want to store a list of values and perform operations on them.
//Arrays are declared using square brackets [] and the values are separated by commas ,
//The length of an array can be found out using .length property.

//The values in an array are called elements. The first element of an array is at index 0, the second element is at index 1, and so on. So, in the above example, the value 1 is at index 0, the value 2 is at index 1, and the value 3 is at index 2.
let marks_class_12 = [91, 82, 63, 84, false, "Not Present"]
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6]) // Will be undefined because index 6 does not exist
console.log("The length of marks_class_12 is", marks_class_12.length)
marks_class_12[6] = 89 // Adding a new value to the array
marks_class_12[0] = 96 // Changing the value of an array
console.log(marks_class_12)
console.log(typeof marks_class_12)

