/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

// const weight=prompt('Enter your weigth(kg) : ');
// const height=prompt('Enter your height(m) : ');

// const BMI = parseFloat(weight) / (parseFloat(height))**2;

// if(BMI < 18.5){
//     console.log('You are underweight.')
// }
// else if(BMI>=18.5 && BMI<=24.9){
//     console.log('You are normal.')
// }
// else if(BMI>=25 && BMI<=29.9){
//     console.log('You are overweight.')
// }
// else{
//     console.log('You are obese')
// }

// console.log(`Your BMI ${BMI.toFixed(2)}`)

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

let num1=4, num2=6, result;
const finalRes= num1>num2 ? num1+num1 : num1+num2 ;
console.log(finalRes)