/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

for(let i=1; i<=100; i++){
    let sqrt=Math.sqrt(i);
    if(Math.floor(sqrt)===sqrt){
        break;
    }
    console.log(i);
}

/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let sum=0;
for(let i=1; i<=100; i++){
    sum+=i;
    if (sum >= 100){
        sum-=i;
        break;
    }
    console.log(`Sum until number ${i} is ${sum}`)
}
console.log('Final Sum :', sum)