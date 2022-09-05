
// Array => An array is a special variable, which can hold more than one value.
// Syntax => const array_name = [item1, item2, ...];  
// Array stores data based on indexes.
// Array indexes start with 0.

// 1. Creating the array 0  1   2   3   4   5
const arrayOfNumbers = [10, 20, 41, 21, 93, 54];
console.log(arrayOfNumbers);  // [ 10, 20, 41, 21, 93, 54 ]

// 2. How to access the value from array.
console.log(arrayOfNumbers[2]);  // 41

// 3. How to add a new value in array.
arrayOfNumbers.push(50);
console.log(arrayOfNumbers);  // [10, 20, 41, 21, 93, 54, 50]

// 4. How to remove a value from array.
arrayOfNumbers.pop();
console.log(arrayOfNumbers);  // [10, 20, 41, 21, 93, 54]

// 5. How to add a new value in array at start.
arrayOfNumbers.unshift(5);
console.log(arrayOfNumbers);  // [5, 10, 20, 41, 21, 93, 54]

// 6. How to remove a value in array from start.
arrayOfNumbers.shift();

// 7. How to insert an element anywhere using indexes.
arrayOfNumbers.splice(2, 0, 25);
console.log(arrayOfNumbers);  //[10, 20, 25, 41, 21, 93, 54]

// 8. How to delete an element using indexes.
arrayOfNumbers.splice(2, 1);
console.log(arrayOfNumbers);  //[10, 20, 41, 21, 93, 54]

// 9. How to get size of an array.
console.log(arrayOfNumbers.length);  // 6

// 10. How to get part of an array.
console.log(arrayOfNumbers.slice(1,4));  // [ 20, 41, 21 ]

// 11. How to eccess the first array element.
console.log(arrayOfNumbers[0]);  // 10

// 12. How to change an array elements.
arrayOfNumbers[0] = 25;
console.log(arrayOfNumbers);  // [25, 20, 41, 21, 93, 54]

// 13. Concating arrays.
const arrayOfNumbers2 = [60, 70, 80];
const myResult = arrayOfNumbers.concat(arrayOfNumbers2);
console.log(myResult);  // [25, 20, 41, 21, 93, 54, 60, 70, 80]

// 14. Marging an array with values.
const myResult2 = arrayOfNumbers.concat(80);
console.log(myResult2);  // [25, 20, 41, 21, 93, 54, 80]

// 15. Shorting an array.
console.log(arrayOfNumbers.sort());  // [ 20, 21, 25, 41, 54, 93 ]

// 16. Reversing an array.
console.log(arrayOfNumbers.reverse());  // [ 93, 54, 41, 25, 21, 20 ]

// 17. How to find an element in array based on condition.
const result = arrayOfNumbers.find(e=> e==41);
console.log(result);  // 41

// 18. How to find an multiple elements in array based on condition.
const numberGreaterThan40 = arrayOfNumbers.filter(e=> e>40);
console.log(numberGreaterThan40);  // [ 93, 54, 41 ]