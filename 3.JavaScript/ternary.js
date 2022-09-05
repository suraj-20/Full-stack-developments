
// Ternary Operator --> ? :

// <conditionalExpression> ? <returnIfMatchesTheCondition> : <returnIfNotMatchesTheCondition>

// By using if else statement.

function isEven(val){
    if(val%2==0){
        return true;
    }else{
        return false;
    }
}

console.log(isEven(100));  // true
console.log(isEven(101));  // false

// By using ternary operators.

function isEven(val){
    const result = val%2==0 ? true : false;
    return result;
}

console.log(isEven(100));  // true
console.log(isEven(101));  // false
