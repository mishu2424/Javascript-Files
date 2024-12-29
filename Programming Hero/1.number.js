let price=78;
let updatedPrice='89';
// We use parseInt to convert a string to a integer number.
console.log(price+parseInt(updatedPrice));
let newPrice='45.55643';
// We use parseFloat to convert a string to a float number.
let updatedNewPrice=parseInt(updatedPrice)+parseFloat(newPrice);
// We use toFixed(0-20) to get a fixed decimal number.
// BUT toFixed(0-20) convert a number to a string, hence why used parseFloat again in the following example.
console.log(parseFloat(updatedNewPrice.toFixed(2)))


const num=100/0;
// When we divide a integer number by 0, we get Infinity.
console.log(num)
const num2=-100/0;
// When we divide a integer number by 0, we get -sInfinity.
console.log(num2)


// In case of '+' operator
console.log(40+20);
console.log('40'+20);
console.log('40'+'20');
// In case of '-' operator
console.log(40-20);
console.log('40'-20);
// In case of '*' operator
console.log('40'*2);
// In case of '/' operator
console.log('40'/2);
// In case of '%' operator
console.log('40' % 11);

// So, it means, only when we are using '+' operator to concatenate between a string and a number, it will convert into string. In case of other
// operators, it will convert into number.


// isNaN()
isNaN(NaN); // true
isNaN(undefined); // true
isNaN({}); // true

isNaN(true); // false
isNaN(null); // false
isNaN(37); // false

// Strings
isNaN("37"); // false: "37" is converted to the number 37 which is not NaN
isNaN("37.37"); // false: "37.37" is converted to the number 37.37 which is not NaN
isNaN("37,5"); // true
isNaN("123ABC"); // true: Number("123ABC") is NaN
isNaN(""); // false: the empty string is converted to 0 which is not NaN
isNaN(" "); // false: a string with spaces is converted to 0 which is not NaN

// Dates
isNaN(new Date()); // false; Date objects can be converted to a number (timestamp)
isNaN(new Date().toString()); // true; the string representation of a Date object cannot be parsed as a number

// Arrays
isNaN([]); // false; the primitive representation is "", which coverts to the number 0
isNaN([1]); // false; the primitive representation is "1"
isNaN([1, 2]); // true; the primitive representation is "1,2", which cannot be parsed as number
