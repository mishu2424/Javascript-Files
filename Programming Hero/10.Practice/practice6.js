//For each employee their current salary is calculated by multiplying yearly increment with experience 
// then adding the result to the starting salary.
// Now calculate the total salary that has to be provided by the company in a month.
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

const totalSalary=(employees)=>{
    //validation
    if(Array.isArray(employees)===false){
        return 'Please provide an array.'
    }
    const totalWage=employees.reduce((prev,curr)=>{
        return prev+((curr.experience*curr.increment)+curr.starting)
    },0)
    return totalWage;
}
console.log(`Total salary the company has to pay is ${totalSalary(employees)}`)
//Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed', 'bon'];
const smallestName=(heights2)=>{
    let smallestWord='';
    let min=heights2[0].length;
    heights2.forEach((word)=>{
        if(word.length<min){
            min=word.length
            smallestWord=word;
        }
        else if(word.length==min){
            smallestWord=smallestWord+' '+word;
        }
    })
    // for(let word of heights2){
    //     if(word.length<min){
    //         min=word.length;
    //         smallestWord=word;
    //     }
    //     else if(word.length==min){
    //         smallestWord=smallestWord+' '+word;
    //     }
    // }
    return smallestWord;
}
const smallestNames=smallestName(heights2);
console.log(smallestNames.split(' ').join(','));