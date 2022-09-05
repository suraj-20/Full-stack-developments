
// Template Literals in JavaScript.

// Allow you to embed JS variables in string.
// Provided in ES6.

const name = "Suraj"
const study = "Study in Starex University"
const location = "Gurgaon"
const course = "BCA"

// My name is Suraj and I study in starex University. I stay in gurgaon and I have persuing my BCA.

const sentenceUsingPlusOperator = 
    "My name is "+name+ " and I "+study+ ". I stay in "+location+ " and I have persuing my "+course+ ".";
console.log(sentenceUsingPlusOperator);


const sentenceUsingTemplateLiteral = 
    `My name is ${name} and I ${study} .I stay in ${location} and I have persuing my ${course}.`
console.log(sentenceUsingTemplateLiteral)