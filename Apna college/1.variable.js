var fName='Mishu';
var fName='Apurbo';
var fName='Dey';
// We are re-declaring same variable again and again and changing it's value.
console.log(fName);
let fullName='Apurbo Dey'
fullName='Apurbo Dey Mishu'
// When we use variable with let keyword, we don't get to re-declare it again and again, if we do we will get errors.But can change the value of it
console.log(fullName);
// Array
const student = {
    fName : 'Apurbo Dey Mishu',
    age : 25,
    cgpa : 3.89,
    isPass : true
};
console.log(student["fName"]);
console.log(student.age);

// Practice Questions
// Create a const object called 'product' to store information shown in the picture.
const product = {
    productName : 'Parker Jotter Standard',
    rating : 4,
    price : 270 ,
    isDeal : true,
    offer : '5% off'
};
console.log(product);

// Create a const object called 'Profile' to store information shown in the picture.
const profile = {
    userName: 'Shradhakhapra',
    isFollow : false,
    isMessage: false,
    post:195,
    followers: 569,
    following: 4
};
console.log(profile);
console.log(typeof profile);
console.log(typeof profile.userName);
