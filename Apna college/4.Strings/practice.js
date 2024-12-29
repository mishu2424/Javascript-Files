//Capitalize Every first Letter of each word in a String

let str='mishu';

str= str.charAt(0).toUpperCase()+str.slice(1).toLowerCase();
console.log(str);

//If a given string has either x, replace x by y. if the given string has X, replace it by Y.


const replacedStr = (str) =>{
    let newStr='';
    for (const element of str) {
        if(element.toLowerCase()==='p'){
            newStr+='b'
        }
        else if(element.toLowerCase()==='b'){
            newStr+='p'
        }
        else{
            newStr+=element
        }
    }
    return newStr;
}

console.log(replacedStr('Pratb'))
//Check whether a string contains all the vowels a, e, i, o, u

const vowelsChecking = (str)=>{
    const vowels=['a', 'e', 'i', 'o', 'u'];
    for(let val of vowels){
        if(!str.toLowerCase().includes(val)){
            return false;
        }
    }
    return true;
}
let res=vowelsChecking('Education')
if (res){
    console.log('All vowels present')
}
else{
    console.log('Not all vowels present')
}



//using every method

const vowels=['a', 'e', 'i', 'o', 'u'];
const checkVowels=((str)=>{
    let lowCased=str.toLowerCase();
    return vowels.every(vowel => lowCased.includes(vowel));
})

let res2=vowelsChecking('Education')
if (res2){
    console.log('All vowels present')
}
else{
    console.log('Not all vowels present')
}