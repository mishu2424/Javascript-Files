//ways to declare objects
const obj1={};
console.log(obj1);
const obj2=new Object({Name:'Mishu', isMarried: true});
console.log(obj2);
const obj3=Object.create({});
console.log(obj3);

const person = {
    person1 : {
        name: 'Barsha Deb',
        profession: 'Health Promotion Specialist',
        age: 25,
        salary: 3000,
        'marital status': 'married', //have to use '' or "" while having a key with spaces in-between.  
        country_name : 'Canada'
    },
    
    person2 : {
        name: 'Apurbo Dey Mishu',
        profession: 'Full Stack Developer',
        age: 25,
        salary: 4000,
        'marital status': 'married', //have to use '' or "" while having a key with spaces in-between.
        country_name : 'Canada'  
    },

}

//getting properties
//dot notation
console.log(person.person1.name)
console.log(person.person1.profession)
//can't use dot notation while accessing to a key in the object having spaces in-between.
// console.log(person.person1.'marital status')  <- this is not allowed.
//bracket notation
console.log(person.person1["marital status"])  

//setting a property
person.person1['city']='Mississauga';
person.person2['city']='Mississauga';
console.log(person)


//gettting all the keys of object
let k1=Object.keys(person.person1); //returns an array with all the keys/properties inside.
let k2=Object.keys(person.person2); //returns an array with all the keys/properties inside.
console.log(k1,k2)


//getting all the values of object
let v1=Object.values(person.person1); //returns an array with all the values inside.
let v2=Object.values(person.person2);
console.log(v1,v2)


//Deleting a property
delete person.person1.country_name;
delete person.person2.country_name;
console.log(person.person1,person.person2)



//traversing through the object
for(let prop in person){
    console.log("Name: ", person[prop].name);
}

//another way to traverse
const keys=Object.keys(person)
for(let key of keys){
    console.log("Name: ",person[key].name)
}