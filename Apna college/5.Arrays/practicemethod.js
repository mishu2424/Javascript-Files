//Practice Question
//We are given array of marks of students. Filter out of the marks of students that scored 90.
let marks = [89, 90, 85, 92, 80, 83, 95]
const filteredStudents= marks.filter((val)=>{
    return val > 90;
})
console.log('Students who scored 90+',filteredStudents);

//Make an array by the user
/* let n;
while (true){
    n=prompt('Enter the length of your array: ');
    if(isNaN(n)||n === ''){
        alert('Please enter a number');
        continue;
    }
    break;
}
let userArr=[];
let i=0;
while (n!=0){
    let userNumber=prompt(`Enter the value for index ${i}: `);
    if(isNaN(userNumber) || userNumber === ''){
        alert('Please enter a number');
        continue;
    }
    let parsedNumber=parseInt(userNumber);
    userArr.push(parsedNumber);
    i++;
    n--;

} */


//Take a number n as input from user. Create an array of numbers from 1 to n.
//Use the reduce method to calculate sum of all numbers in the array.
//Use the reduce method to calculate product of all numbers in the array.
//Creating an array of numbers from 1 to n.
let n;
while (true){
    n=prompt('Enter the number: ');
    if(isNaN(n)||n === ''){
        alert('Please enter a number');
        continue;
    }
    break;
}
let userArr=[];
while (n!=0){
    let parsedNumber=parseInt(n);
    userArr.unshift(parsedNumber);
    n--;
}
console.log(userArr)

//Use the reduce method to calculate sum of all numbers in the array.
const sum=userArr.reduce((prev, currentVal)=>{
    return prev+currentVal;
})
console.log(`Sum of all the numbers : ${sum}`)

//Use the reduce method to calculate product of all numbers in the array.
//Factorial
const factorial=userArr.reduce((prev, currentVal)=>{
    return prev*currentVal;
})
console.log(`Factorial of all the numbers : ${factorial}`)
