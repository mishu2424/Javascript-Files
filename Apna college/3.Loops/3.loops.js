// Calculate sum of 1 to 5
let sum=0;
for (let i=1; i<=5; i++){
    sum=sum+i;
}
console.log(sum)

// Calculate the sum of 1 to n
// let n=prompt('Enter the number :');
// let sum2=0;
// for (let j=1;j<=n;j++){
//     sum2=sum2+j;
// }
// console.log(`Sum of 1 to ${n}:`,sum2)

// for-of loop
let str="Javascript";
let count=0;
for(let val of str){
    console.log(val);
    count++;
}
console.log(`length of ${str}: `,count)

let arr=[1,3,5,6];
let len=0;
for (let val of arr){
    console.log(val);
    len++;
}
console.log(`length of [${arr}]: `,len)

// for-in loop
let students={
    student1:{
        name:'Barsha Deb',
        age:26,
        cgpa:3.98
    },
    student2:{
        name:'Apurbo Dey Mishu',
        age:25,
        cgpa:3.95
    }
}

for(let val in students){
    console.log(`Information for ${val.toUpperCase()}: `,students[val])
}


// Practice questions
// Print all even numbers from 0 t0 100.

let c=0;
let s=0;
for(let e=0;e<=100;e++){
    if(e%2===0){
        console.log(e,'is an even number');
        c++;
        s=s+e;
    }
}
console.log('Total sum of even numbers from 0 to 100',s)
console.log('The total even numbers from 0 to 100',c)

// Create a game where you start with any random game number. Ask the user to keep guessing until the numbers match.

let randomNumber=10;

while (true){
    let guessedNumber=prompt('Guess the number(0-10): ');
    // If user decide not to continue and click on the Cancel option
    if(guessedNumber===null){
        alert('You quit the game!')
        break;
    }
    if (isNaN(guessedNumber) || guessedNumber===''){
        console.log('Please enter a valid number from 0 to 10')
        continue;
    }
    else{
        if(parseInt(guessedNumber)===randomNumber){
            alert('Winner!')
            break;
        }
        else{
            if(parseInt(guessedNumber)>10){
                console.log('Please try to guess the number from 0 to 10')
                continue;
            }
            console.log('Oops! Try again.');
            continue;
        }
    }
}