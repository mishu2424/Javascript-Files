// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming
// const str="I am learning Programming to become a programmer Programming";
// const splitted=str.split(' ')
// console.log(splitted)
// let maxLen=[];
// for(let word of splitted){
//     maxLen.push(word.length)
// }
// const max=maxLen.reduce((prev,curr)=>{
//     return prev>curr? prev : curr;
// })
// for(let word of splitted){
//     if(word.length==max){
//         console.log(word)
//         break;
//     }
// }

//another way
const str = "I am learning Programming to become a programmer Programming";
const splitted = str.split(" ");
const longestWord = (splitted) => {
  let longestStr = "";
  for (let word of splitted) {
    if (word.length > longestStr.length) {
      longestStr = word;
    }
  }
  return longestStr;
};
console.log(longestWord(splitted));

// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2

// sample-input:
// numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0
const countRepeatedNumbers=()=>{
    let numbers = [5, 6, 11, 12, 98, 5],count=0;
    for(let val of numbers){
        if(val==5){
            count++;
        }
    }
    console.log(`5 was repeated ${count} times`)
}
countRepeatedNumbers();

//let's way we wanna find out maximum time a number repeated in the array.
const maxNumber=()=>{
    let numbers = [5, 6, 11, 12, 98, 5, 10, 20, 10, 10, 5];
    let count=0;
    let maxObj={};
    numbers.forEach((number)=>{
        for(let val of numbers){
            if(number==val){
                count++;
            }
        }
        // console.log(number,count)
        maxObj[number]=count;
        // console.log(maxObj)
        count=0;
    })
    return maxObj;
}
const maxObj=maxNumber()
let max=0;
let highest='';
for(let key in maxObj){
    if(maxObj[key]>max){
        max=maxObj[key];
        highest=key;
    }
    else if(maxObj[key]==max){
        highest=highest+','+key
    }
}
const splittedHighest=highest.split(',');
if(splittedHighest.length>1){
    console.log(`Highest number are ${splittedHighest.join(', ')}`)
}
if(splittedHighest.length===1){
    console.log(`Highest number is ${splittedHighest[0]}`)
}

//let's way we wanna find out how many times each number repeated in the array.
let numbers = [5, 6, 11, 12, 98, 5, 10, 20, 10, 10, 5];
const countingNumbers=()=>{
    let numbers = [5, 6, 11, 12, 98, 5, 10, 20, 10, 10, 5];
    let count=0;
    let maxObj={};
    numbers.forEach((number)=>{
        for(let val of numbers){
            if(number==val){
                count++;
            }
        }
        console.log(number,count)
        maxObj[number]=count;
        console.log(maxObj)
        count=0;
    })
    return maxObj;
}
const countObj=maxNumber()
for(let key in countObj){
    console.log(`${key} has been repeated ${countObj[key]} times`)
}

//Generate a random number between 10 to 20.
const randomGenerator=()=>{
    return Math.round(Math.random()*20)
    //or can use
    //return Math.floor(Math.random() * 11) + 10; // Generates a number between 10 and 20 (inclusive)
}
let randomNumbers=[];
while (true){
    const random=randomGenerator();
    if(10<random && random<20){
        if(randomNumbers.length<6){
            randomNumbers.push(random);
        }
        else{
            break;
        }
    }
}
console.log(randomNumbers.join(''))