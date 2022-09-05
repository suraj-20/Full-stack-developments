
// Date Type in JAvaScript.

// 1. How to get current date and time ?

let currentDate = new Date();
console.log(currentDate);

// 2. Date formats in JavaScript.
console.log(currentDate.toDateString());
console.log(currentDate.toTimeString());

// 3. How to get year from date.
console.log(currentDate.getFullYear());

// 4. How to get month from dates.
console.log(currentDate.getMonth());  // [0 is January,  1 is feburary, ...]

// 5. How to get hours from date.
console.log(currentDate.getHours());  

// 6. How to get day from date.
console.log(currentDate.getDay());  // [0 is for Sunday, 1 for Monday, 2 is for Tuesday,...]

// 7. How to get date.
console.log(currentDate.getDate());


// Most usefull library to work with dates is - moment JS.