
function sum(a, b){
    return a + b;
}
console.log(sum(2, 3));  // 5

const sum2 = (a, b) => {return a + b};
console.log(sum2(5, 7));  // 12

const sum3 = (a, b) => a + b;
console.log(sum3(5, 6));  // 11

function sqr(a){
    return a * a;
}
console.log(sqr(5));  // 25

const sqr2 = (a) => {return a * a};
console.log(sqr2(6));  // 36

const sqr3 = a => a * a;
console.log(sqr3(7));  // 49