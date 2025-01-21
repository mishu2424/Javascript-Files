// Practice Questions
/* Prompt the User to enter their full name. Generate a username for them based on the input. 
Start username with @, followed by their full name and ending with the fullname length.
eg: username='shraddhakhapra', username should be '@shraddhakhapra14'. */

let fName=prompt('Enter your fullname without spaces: ').trim();
// EVEN IF THE USER ENTERS THE NAME WITH SPACES IN-BETWEEN WE CAN REMOVE THAT BY DOING THIS MANUALLY-
// let updatedFname='';
// for(let val of fName){
//     if(val===' '){
//         continue;
//     }
//     updatedFname+=val;
// }
// console.log('Your name: ',updatedFname)
// let username='@'+updatedFname+updatedFname.length;

// TO DO THE SAME THING WITH STRING METHOD USING REGEX-
let updatedFname=fName.replace(/\s+/gm,'');
console.log(updatedFname)
let userName='@'+updatedFname+updatedFname.length
console.log(`Your username: ${userName}`)