
// Loops can execute a block of code as long as a specified condition is true.

// There are 3 ttype of loop in JavaScript.
    // 1. while loop
    // 2. do-while loop
    // 3. for loop

// 1. Using while loop to print number 1 - 9.

let i = 1;
while(i < 10){
    console.log("This is number " + i);
    i=i+1;
}

// 2. Using do-while loop to print number 1 - 10.

let x = 1;
do{
    console.log(x);
    x++;
}
while(x <= 10);

// 3. USing for loop to print number 1 - 9.

for(let i = 1; i < 10; i++){
    console.log("This is number " + i);
}

// Using for loop to print a table.

const number = 2;
for(i = 1; i <=5; i++){
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}

// Using for loop or break statement to break the loop.

let x1 = 0;
for(x1 = 0; x1 < 10; x1++){
    if(x1 == 6) {break}
    console.log(x1);
}

// Using for loop or continue statement to jump from the loop.

for(x1 = 0; x1 < 10; x1++){
    if(x1 == 3) {continue}
    console.log("This is number " + x1);
}
