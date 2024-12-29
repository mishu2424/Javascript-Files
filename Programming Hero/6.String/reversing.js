// reversing a string
//first way
let str='I am learning web dev.'
let reversed='';
for(let i=(str.length)-1; i>=0; i--){
    reversed=reversed+str[i];
}
console.log(reversed)

//second way
let reversed1='';
for(let i=0; i<str.length; i++){
    reversed1=str[i]+reversed1;
}
console.log(reversed1);

//third way
let reversed2='';
for(let val of str){
    reversed2=val+reversed2;
}
console.log(reversed2)


//fourth way
let splittedStr=str.split('').reverse().join('');