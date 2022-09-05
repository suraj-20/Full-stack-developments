
// Operators.

// In JS there are 2 equality operators --> "== [General Equality Operators]", "=== [Strict Equality Operators]".

// == [Checks for equality of values.]
// === [Checks for equality of values and equality of dataTypes.]

let x = null;  // empty.
let y;  // empty.

console.log(x==y);  // true because both x and y are same value.
console.log(x===y); // false because object!=undefiend.

let num1 = 10;
let num2 = "10";

console.log(num1==num2);  // true because 10 and "10" both values are same.
console.log(num1===num2); // false because number is not equal to string.

// JavaScript arithmetic operators [+, -, *, **, /, %, ++, --]

// The addition operator (+) adds numbers.

let a = 5;
let b = 6;
let c = a + b;
console.log(c);

// The Multiplication operator (*) multiplies numbers.

let d = 5;
let e = 6;
let f = d * e;
console.log(f);

// JavaScript Assignment Operators [=, +=, -=, *=, /=, %=, **=].

// The addition assignment operator (+=) adds a value to a variable.

let s = 10;
s += 5;
console.log(s);

// The multiplication assignment operator (-=) multiplies a value to a variable.

let g = 10;
g *= 5;
console.log(g);

// Adding String and numbers.

let h = 5 + 5;
let i = "Hello" + " " + 5;
let j = 5 + "6";
console.log(h);
console.log(i);
console.log(j);