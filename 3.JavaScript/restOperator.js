
// Rest Operator --> (...)
// Introduced in ES6.  [EdvanceScript6]

// Used in collection to help with multiple values.

// Using Rest Operator.
// Converts individual value into an array.

function sum(...number){
    let result = 0;
    for(let i = 0; i<number.length; i++){
        result = result + number[i];
    }
    console.log(result);
}

sum(2, 3);  // 5
sum(2, 3, 4);  // 9
sum(2, 3, 4, 5);  // 14
sum(2, 3, 4, 5, 6);  // 20
