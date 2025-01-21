//forEach
let cities=['Mississauga', 'Ottawa', 'Vancouver'];
cities.forEach((val)=>{
    console.log(val.toUpperCase())
});
cities.forEach((val,index)=>{ //we can also pass index as parameter.
    console.log(val.toUpperCase(),index)
});
cities.forEach((val,index,cities)=>{ //we can also pass the whole array as parameter.
    console.log(val.toUpperCase(),index,cities)
});

//Practice Question
//For a given array of numbers, print the square of each value using the forEach loop.
let numbers=[3,5,7,9];
numbers.forEach((number,indx,arr)=>{
    numbers[indx]=number*number;
    console.log(`Current Array after the square of ${number} at index ${indx} : ${arr}`)
});
console.log(`Final Array ${numbers}`)


//map
//just like forEach we can pass 3 parameters in map method as well.
let numbs=[4,8,12,16];
const newArr=numbs.map((numb)=>{
    return numb*numb;
})
console.log('Map1',newArr)
const newArr2=numbs.map((numb,indx)=>{
    console.log('Index',indx,'->',numb);
    return numb*numb*numb;
})
console.log('Map2',newArr2)
const newArr3=numbs.map((numb,indx,numbs)=>{
    console.log('Index',indx,'->',numb);
    console.log(numbs);
    return numb*2;
})
console.log('Map3',newArr2)

//filter
let simpleNumbers=[2,4,5,7,6,10,20,8];
const evenArr=simpleNumbers.filter((val)=>{
    return val%2===0 && val>6;
})
console.log(evenArr)


//Reduce 
const arr1 = [2, 4, 20, 6, 100, 8];
const sum = arr1.reduce((res, currentVal)=>{
    return res + currentVal;
})

console.log('Sum using reduce method', sum)

// const max=arr1.reduce((prev,currentVal)=>{
//     let maximum=0;
//     if (prev > currentVal){
//         if(prev>maximum){
//             maximum=prev;
//         }
//     }
//     else if (currentVal>maximum){
//         maximum=currentVal;
//     }

//     return maximum;
// })
// console.log('Maximum', max)


//To do the same task more easily
const max=arr1.reduce((prev,currentVal)=>{
    return prev > currentVal ? prev : currentVal;
})
console.log('Maximum', max)
