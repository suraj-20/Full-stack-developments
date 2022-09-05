
// What is String ? --> A string is a sequence of one or more characters that may consist of letters, numbers, or symbols.

let password = "S8u2r8a7J";
console.log(typeof password);  // string

// 1. How to make all character in lowercase.
console.log(password.toLowerCase());  // s8u2r8a7j

// 2. How to make all character in uppercase.
console.log(password.toUpperCase());  // S8U2R8A7J

// 3. How do I check if string contains some characters.
console.log(password.includes("8a"));  // true

// 4. How do I find index of a character in string.
console.log(password.indexOf("a"));  // 6
console.log(password.lastIndexOf("j"));  // -1

// 5. How do I check if string end up & start up with some character.
console.log(password.endsWith("7J"));  // true
console.log(password.startsWith("s8"));  // false

// 6. How to check the length of the string.
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(txt.length);  // 26

// 7. How to extract string parts.
// By using slice method.
console.log(txt.slice(10, 17));  // KLMNOPQ
console.log(txt.slice(5));  // FGHIJKLMNOPQRSTUVWXYZ

// By using substring method.
console.log(txt.substring(10, 17));  // KLMNOPQ
console.log(txt.substring(5));  // FGHIJKLMNOPQRSTUVWXYZ

// By using substr method.
console.log(txt.substr(10, 6));  // KLMONP
console.log(txt.substr(5));  // FGHIJKLMNOPQRSTUVWXYZ

// 8. How to replace string content.
console.log(txt.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "A - Z"));  // A - Z

// 9. How do I concat or merge two or more string in a single string.
let str1 = "You and";
let str2 = "Me";
console.log(str1.concat(" ",str2));  // You and Me

// 10. How do I remove whitespace from both side of a string.
let text1 = "        You and Me          ";
let text2 = text1.trim();
console.log(text1.length);  // 28
console.log(text2.length);  // 10

let text = "5"
console.log(text.padStart(5, "0"));  //00005
console.log(text.padEnd(5, "0"));  //50000

// 11. How do I search for a specified value and returns position in a string.
console.log(txt.search("Z"));