
// Conditional statements are used to perform different actions based on different conditions.

// In JavaScript we have following conditional statements.
   // 1. if()
   // 2. else()
   // 3. else if()
   // 4. switch

// 1. If hours is less then 12P.M then give good morning message. 

let d = new Date();
let d1 = d.getHours();
console.log(d1);
if(new Date().getHours() < 12){
    greating = ("Good Morning");
}
if(new Date().getHours() < 18){
    greating = ("Good Afternoon");
}
console.log(greating);

// 2. If hours is less then 12P.M then print "Good Morning" else print "Good Afternoon".

if (new Date().getHours() < 12){
    greating = ("Good Morning");
}else{
    greating = ("Good Afternoon");
}
console.log(greating);

// If age is greater than 18 print eligible else print not eligible.

let age = 20;
if(age >= 18){
    print = ("You are eligible to vote.");
}else{
    print = ("You are not eligible to vote.");
}
console.log(print);

// 3. If hours is less then 12 print "Good Morning" else if hours if less then 6 print "Good Afternoon" else print "Good Evening."

if(new Date().getHours() < 12){
    greating = ("Good Morning");
}else if (new Date().getHours() < 18){
    greating = ("Good Afternoon");
}else{
    greating = ("Good Evening");
}
console.log(greating);

// If marks is grater than 80 print "Grade A" else if marks is greater then 50 and less than 80 print "GRade B" else print "Fail"

let marks = 90;
if(marks >= 80 && marks <= 100){
    print = ("You score grade A..");
}else if(marks >= 50 && marks <= 80){
    print = ("You score grade B..");
}else{
    print = ("You are fail..");
}
console.log(print);

// 4. Using Switch statement

switch(new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "Nothing";
        break;
}
console.log("Today is " + day);


switch(new Date().getDay()){
    case 0:
        day = "Today is Sunday";
        break;
    case 6:
        day = "Today is Saturday";
        break;
    default:
        day = "Looking for the weekend";
        break;
}
console.log(day);

// 5. Using break statement.

let i = 0;
for(let i = 0; i < 10; i++){
    if(i ==  5) {break}
    console.log("This is number " + i);
}

// 6. Using continue statement.

for(let x1 = 0; x1 < 10; x1++){
    if(x1 == 3) {continue}
    console.log(x1);
}
