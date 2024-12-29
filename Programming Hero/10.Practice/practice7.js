//check if a name ends with any vowel character.
const checkName = (str) => {
  if (typeof str !== "string") {
    return "Invalid";
  }
  if (
    str.endsWith("a") ||
    str.endsWith("e") ||
    str.endsWith("i") ||
    str.endsWith("o") ||
    str.endsWith("y")
  ) {
    return "Good name";
  } else {
    return "Bad Name";
  }
};
console.log(checkName("rishad"));
console.log(checkName("shanto"));
console.log(checkName(3));

//delete invalid numbers
let numbers = [NaN, 1, 12, 0, -1, undefined, null, "12", [1, 2]];
const deleteInvalids = (numbers) => {
  let validNumbers = [];
  for (let val of numbers) {
    if (typeof val !== "number" || Number.isNaN(val)) {
      continue;
    }
    validNumbers.push(val);
  }
  return validNumbers;
};
console.log(deleteInvalids(numbers));

//password generator

// function password(info){
//     let password='';
//     for(let val in info){
//         if(val==='siteName'){
//             let capitalizing=info[val].charAt(0).toUpperCase()+info[val].slice(1).toLowerCase();
//             password+=capitalizing;
//         }
//         if(val==='name'){
//             password+='#'+info[val];
//         }
//         if(val==='birthYear'){
//             password+='@'+info[val];
//         }
//     }
//     console.log(password)
// }
// password({siteName:"google",name:"mishu",birthYear:1999});
function password(info) {
  let keys=Object.keys(info);
  let len=String(info['birthYear']).length
  if(typeof info!=='object' || keys.length!==3 || len!==4){
    return 'invalid';
  }
  let password = "";
  let count=0;
  while(true){
    for (let val in info) {
        if (val === "siteName" && count===0) {
          let capitalizing =info[val].charAt(0).toUpperCase() + info[val].slice(1).toLowerCase();
          password += capitalizing;
          count++;
        }
        if (val === "name" && count===1) {
          password += "#" + info[val];
          count++;
        }
        if (val === "birthYear" && count===2) {
          password += "@" + info[val];
          count++;
          return password;
        }
      }
  }

}
console.log(password({ name: "mishu", birthYear: 1999, siteName: "google" }));


//Savings
const monthlySavings=(earnings,livingCost)=>{
    if(Array.isArray(earnings)===false || typeof livingCost!=='number'){
        return 'invalid input';
    }
    let savings=0;
    let totalIncome=0;
    earnings.forEach(element => {
        if(element>=3000){
            element=element*0.80;
        }
        totalIncome+=element
    });
    savings = totalIncome-livingCost;
    if(savings<0){
        return 'earn more';
    }
    return savings;
}
const savings=monthlySavings([2000, 4000, 1000, 3000],900);
console.log('Total savings',savings)