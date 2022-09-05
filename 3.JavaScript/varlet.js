
// Difference between var and let ?

// Variables defines with let cannot be redeclared.

// let x = 10;
// let x = 5;
// console.log(x);

// Variables defines with var will be redeclared.

var x = 10;
var x = 5;
console.log(x);

// How to declare function in JS ?
// Syntex --> function<nameOfFunction>(<params>){}

function testDeclaration(){
    // let - scope will be entire function.
    if(true){
        var x = 10;
        let y = 20;  // scope will be inside if block.
        console.log("This is inside if block.");
        console.log(x);  //10
        console.log(y);  //20
    }
    console.log("This is outside if block.")
    console.log(x);  //10
    console.log(y);  //y is not defined
}

// Declaring using var has function lavel scope.
// Declaring using let has block lavel scope. 

// Execute(or declare) the function.
testDeclaration();