// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

let numbers = ['Tom', 'Tim', 'Tin', 'Tik'],str='';
for(let val of numbers){
    str+=val;
}
console.log(str)

//another way
let newStr=numbers.join('')
console.log(newStr)

// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

const statement = 'I am a hard working person';
let revStr=statement.split(' ').reverse().join(' ');
console.log(revStr)