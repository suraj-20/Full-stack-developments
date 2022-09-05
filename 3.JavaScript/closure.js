
// Closure => Closure copyies the parent scope into the child whatever data is refering.

function add(num1, num2){
    var num3 = 10;
    return function sum(){
        return num1 + num2 + num3;
    }
}

const result = add(20, 30);  // return sum function
console.log(result);
console.log(result());  // invoking sum function