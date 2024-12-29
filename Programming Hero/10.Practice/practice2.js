//Calculate the average of all the odd numbers in an array.
let arr = [2, 5, 7, 9, 6, 10, 17];
const oddNumbers = arr.filter((val) => {
  return val % 2 === 1;
});
const sumOfOdd = oddNumbers.reduce((res, curr) => {
  return res + curr;
});
console.log(sumOfOdd/oddNumbers.length);


//removing duplicate items in an array
let duplicateArr = [2, 4, 2, 5, 2];
let uniqueArr=[];
for(let val of duplicateArr){
    if(uniqueArr.includes(val)){
        continue;
    }
    uniqueArr.push(val);
}
console.log(uniqueArr)


let duplicateArr2 = [2, 4, 2, 5, 2];
