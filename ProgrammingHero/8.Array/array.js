//ways to reverse an array
const arr=[1, 2, 3, 4, 5, 6, 7];
console.log(arr.reverse());

//another way
const arr1=[1, 2, 3, 4, 5, 6, 7];
let revArr=[];
for(let val of arr1){
    revArr.unshift(val);
}
console.log('Using for-of',revArr)

//another way
const arr2=[1, 2, 3, 4, 5, 6, 7];
let revArr2=[];
for(let i = arr2.length - 1; i>=0; i--){
    revArr2.push(arr2[i])
}
console.log('Using normal for loop', revArr2)
//another way
const arr3=[1, 2, 3, 4, 5, 6, 7];
let revArr3=[];
for(let i = 0; i<arr3.length; i++){
    revArr3.unshift(arr3[i])
}
console.log('Using normal for loop 2', revArr3)