
// Spread Operator --> (...)
// Introduced in ES6.  [EdvanceScript6]

// Used in collection to help with multiple values.

// Using Spread Operator.
// Converts array into an individual values.

const indianCars = ["Tata", "Maruti", "Mahindra"];
const usCars = ["Ferrari", "Tesla", "Ford"];

// Create another array with values from both these array.

console.log(indianCars);  // [ 'Tata', 'Maruti', 'Mahindra' ]
console.log(usCars);  // [ 'Ferrari', 'Tesla', 'Ford' ]

const result = [indianCars + usCars];
console.log(result);  // [ 'Tata,Maruti,MahindraFerrari,Tesla,Ford' ]

const result2 = [...indianCars,...usCars];
console.log(result2);  // [ 'Tata', 'Maruti', 'Mahindra', 'Ferrari', 'Tesla', 'Ford' ]

const result3 = indianCars.concat(usCars);
console.log(result3);  // [ 'Tata', 'Maruti', 'Mahindra', 'Ferrari', 'Tesla', 'Ford' ]

const result4 = [...result3, "KIA"];
console.log(result4);  // [ 'Tata', 'Maruti', 'Mahindra', 'Ferrari', 'Tesla', 'Ford', 'KIA' ]