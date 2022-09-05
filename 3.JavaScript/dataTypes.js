
// Data Types.

// C - int, char, float, double.
// Java - int, char, float, double, string, long, date, decimal.

// int x = 10;
// var x = 10;
// x = "name";

// DataTypes in JS ?
// 1. number
// 2. string
// 3. boolean
// 4. object
// 5. function
// 6. undefined
// 7. null

let x;  // Value is not defined.
// Operator to find datatypes of an identifiers - "typeof".
console.log(typeof x);  // undefined

x = 10;
console.log(typeof x);  // number

x = "name";
console.log(typeof x);  // string

x = {id:1, name:'mus', dept:"doctor"};
console.log(typeof x);  // object

x = function print(){
    console.log("This is a funtion")
}
console.log(typeof x);  // function

x = new Date;
console.log(x); 
console.log(typeof x);  // object
console.log(x instanceof Date);  //true

x = null;  // Defined with no data.
console.log(typeof x);  //object