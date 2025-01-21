*Difference between let VS const.
```
let-> We can reassign new value to a let type variable.
const-> We can't reassign new value to a const type variable.

But if we declare an array with a const variable, we can push, pop or can change any single value of an index. But can't wholely reassign a complete new array.
But if we declare an object with a const variable, we can change the value of any key, but can't reassign a new object to it.
```

Default Parameters
```
function add(num1,num2){
    console.log(num1, num2, num1+num2);
}
add(2,3); //expected output- 2, 3, 5
add();  //expected output- undefined, undefined, NaN
add(2); //expected output- 2, undefined, NaN
Now, we can resolve this situation using default parameters.
function add(num1 = 1, num2= 3){
    console.log(num1, num2, num1+num2);
}
add(2,2) //expected output- 2, 2, 5
add(); //expected output- 1, 3, 4
add(2); //expected output- 2, 3, 5

Now, in case of an user giving infos for name which is string data type. We can give an empty string as default parameter.
function fullName(first, last=""){ 
    console.log(first+ " " +last);
} 

Now, in case of array,
function friends(numbs=[]){
    console.log(numbs);
}

Now, in case of an object,
function person(human={}){

}
```

Arrow functions VS Regular functions
```
1.Arrow functions have a shorter, more concise syntax compared to regular functions.
Arrow function syntax:
const add = (a, b) => a + b;

Regular function syntax:
function add(a, b) {
  return a + b;
}

2. this Binding
*Arrow functions do not have their own this context. Instead, they lexically bind this, meaning they inherit this from the surrounding (enclosing) scope at the time they are created.
*Regular functions have their own this, which depends on how the function is called.


The main differences between arrow functions and regular functions in JavaScript are related to syntax, behavior of the this keyword, and how they handle arguments.

1. Syntax
Arrow functions have a shorter, more concise syntax compared to regular functions.

Arrow function syntax:

javascript
Copy
const add = (a, b) => a + b;
Regular function syntax:

javascript
Copy
function add(a, b) {
  return a + b;
}
2. this Binding
One of the most significant differences is how this works in each type of function.

*Arrow functions do not have their own this context. Instead, they lexically bind this, meaning they inherit this from the surrounding (enclosing) scope at the time they are created.
*Regular functions have their own this, which depends on how the function is called.

Example with Arrow Function:
const obj = {
  name: 'Arrow',
  greet: () => {
    console.log(this.name);  // 'this' refers to the outer scope, not the 'obj' object
  }
};

obj.greet();  // undefined because 'this' does not refer to 'obj'

Example with Regular Function:
const obj = {
  name: 'Regular',
  greet: function() {
    console.log(this.name);  // 'this' refers to the 'obj' object
  }
};

obj.greet();  // 'Regular'

3. arguments Object
*Arrow functions do not have their own arguments object. Instead, they inherit it from the surrounding scope.
*Regular functions have their own arguments object, which contains all arguments passed to the function.

Example with Arrow Function:
const sum = () => {
  console.log(arguments);  // ReferenceError: arguments is not defined
};

sum(1, 2, 3);
Example with Regular Function:
function sum() {
  console.log(arguments);  // [1, 2, 3]
}

sum(1, 2, 3);

4.Constructor Behavior
*Arrow functions cannot be used as constructors and will throw an error if invoked with new.
*Regular functions can be used as constructors and will work with the new keyword.

Example with Arrow Function as Constructor:
const Person = (name) => {
  this.name = name;
};

const p = new Person('John');  // TypeError: Person is not a constructor

Example with Regular Function as Constructor:
function Person(name) {
  this.name = name;
}

const p = new Person('John');  // Works fine, p.name = 'John'

```

Spread Operator
```
const numbs=[2, 3, 5, 7, 9];
console.log(Math.max(...numbs));

const digits=[1, 3, 6, 8];
const digits2=digits;
digits2.push(5);
console.log(digits); //expected output- [1, 3, 6, 8, 5];
console.log(digits2); //expected output- [1, 3, 6, 8, 5];
The values of both arrays are same even tho we just pushed value(5) into the digits2 array.
The reason it happens is because when we write const digits2=digits, both of the arrays refer to the same memory of the computer.
That's why when we make change in digits2, digits is also getting changed.


To avoid this we can use spread operator. Spread operator can copy an array.
const digits=[1, 3, 6, 8];
const digits2=[...digits];
digits2.push(5);
console.log(digits); //expected output- [1, 3, 6, 8];
console.log(digits2); //expected output- [1, 3, 6, 8, 5];

Merging Arrays->
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];  // Merging arr1 and arr2
console.log(merged);  // Output: [1, 2, 3, 4, 5, 6]

Adding Elements to an Array->
const arr1 = [2, 3];
const arr2 = [1, ...arr1, 4];
console.log(arr2);  // Output: [1, 2, 3, 4]



2.Using the Spread Operator with Objects

* Copying an Object->
const person = { name: 'Alice', age: 25 };
const copy = { ...person };
console.log(copy);  // Output: { name: 'Alice', age: 25 }

*Merging Objects->
const person = { name: 'Alice' };
const address = { city: 'Wonderland', country: 'Fictional' };
const merged = { ...person, ...address };
console.log(merged);  // Output: { name: 'Alice', city: 'Wonderland', country: 'Fictional' }

*Overriding Properties in Merged Objects->
const person = { name: 'Alice', age: 25 };
const updatedPerson = { ...person, age: 26 };  // 'age' will be updated
console.log(updatedPerson);  // Output: { name: 'Alice', age: 26 }

3. Spread Operator in Function Parameters

Example 1: Using Spread to Collect Arguments->
function printNumbers(...numbers) {
  console.log(numbers);  // Collects all arguments into an array
}

printNumbers(1, 2, 3, 4);  // Output: [1, 2, 3, 4]

Example 2: Combining Spread with Rest Parameters->
function combineArrays(...arrays) {
  return arrays.flat();  // Combines all arrays into one
}

const result = combineArrays([1, 2], [3, 4], [5, 6]);
console.log(result);  // Output: [1, 2, 3, 4, 5, 6]

```

Destructuring
```
4. Spread Operator in Destructuring

Example 1: Array Destructuring with Rest->
const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;
console.log(first);   // Output: 1
console.log(second);  // Output: 2
console.log(rest);    // Output: [3, 4, 5]

Example 2: Object Destructuring with Rest->
const person = { name: 'Alice', city: 'Wonderland', age: 25, status:'married' };
const { name, age:boyos,  ...rest } = person;
console.log(name);  // Output: Alice
console.log(boyos);  // Output: 25
console.log(rest);  // Output: { city: 'Wonderland', status:'married' }

Example 3:Function Destructuring
function doubles(a, b){
  return [a*2, b*2];
}
const [x,y]=doubles(2,3)
console.log(x); //Output: 2
console.log(y); //Output: 3


Example 4:Skipping items in an array
const numbs=[2, 4, 7];
const [num1,,num3]=numbs; //skipped the value of index2.
console.log(num1,num3); //2 7 


Example 5:Default params

let [num1=0, num2=2, num3=8]=[3, 5];
console.log(num1, num2, num3); //3, 5, 8

Example 6:Swapping Values
let num1=2, num2=6;
let [num1,num2] = [num2,num1];
console.log(num1, num2); //6 2
```

Object 
```
const person={
    name:'Apurbo Dey',
    age:25,
    isMarried:true,
    employment:'employed'
};
1.Keys
console.log(Object.keys(person)) // Output->[ 'name', 'age', 'isMarried', 'employment' ]
2.Values
console.log(Object.values(person)) // Output->[ 'Apurbo Dey', 25, true, 'employed' ]
3.Entries
console.log(Object.entries(person)) 
//It returns array of array.
//Output->
//   [
//     [ 'name', 'Apurbo Dey' ],
//     [ 'age', 25 ],
//     [ 'isMarried', true ],
//     [ 'employment', 'employed' ]
//   ]

4.Delete
Delete a Property
delete person.isMarried;
console.log(person) // Output->{ name: 'Apurbo Dey', age: 25, employment: 'employed' }

another way to delete is using destructuring.
const {isMarried,...rest}=person;
console.log(rest); // Output->{ name: 'Apurbo Dey', age: 25, employment: 'employed' }

5.Freeze
Object.freeze(person);
//When we freeze an object, we can't delete, update or change any value of the object
person.name='Mishu';
//delete->
delete person.isMarried;
// update->
person.currentLivingCountry='Canada';
console.log(person) 
//Nothing has been changed->
//Output->
//   {
//     name: 'Apurbo Dey',
//     age: 25,
//     isMarried: true,
//     employment: 'employed'
//   }


6.Seal
//When we seal an object, we can't delete or update the object, but we can change its value
Object.seal(person)
person.name='Mishu'; //Only this will work
delete person.isMarried;
person.currentLivingCountry='Canada';
console.log(person) 
//Output->
// { name: 'Mishu', age: 25, isMarried: true, employment: 'employed' }
```


Optional Chaining
```
Trying to access a value that might or might not be present in the object, in that case, we use the concept of Optional Chaining.
Example-1->
const user={
    name:'Mavish',
    city:{
        address:{
            street:'somethingsomething',
        }
    }
}
console.log(user?.city?.address?.street)

Example-2->
const user2={
    name:'Mavish',
    city:{
        cityName:'Something',
    }
}
console.log(user2.city.address?.street)

Example-3->
let user = {
  getName: function() {
    return "John";
  }
};

console.log(user.getName?.());  // Output: "John"
console.log(user.getAge?.());   // Output: undefined (No error, because getAge is undefined)

Example-4->
let users = [
  { name: "John" },
  { name: "Jane" }
];

console.log(users[0]?.name);  // Output: "John"
console.log(users[2]?.name);  // Output: undefined (No error, because index 2 is out of bounds)

Nullish Coalescing Operator
You can combine optional chaining with the nullish coalescing operator (??) to provide default values if the accessed property is undefined or null.
let user = {
  name: "John"
};

console.log(user.address?.city ?? "City not found");  // Output: "City not found"

```

Map Vs forEach
```
map() method goes through every element in an array and returns an array with expected result.
forEach() method goes through every element in an array but doesn't return anything.
```

filter Vs find
```
filter() method returns only those elements that match the condition whereas find() method returns only the first matched element of the array.
```

reduce method
```
const numbs=[34, 656, 67, 23, 1, 0];
const max=numbs.reduce((prev,curr)=>{
    return prev>curr?prev:curr;
})
console.log(max)

const items=[
    {name:'Phone',price:40000,brand:'Iphone'},
    {name:'TV',price:60000,brand:'Samsung'},
    {name:'XBOX',price:10000,brand:'NVIDIA'},
];

const expensiveItem=items.reduce((prev,curr)=>{
    return prev.price>curr.price?prev:curr;
})
console.log(expensiveItem);
```

How do we empty an array?
```
let arr = [1, 2, 3, 4];
arr.length = 0;  // Empties the array
console.log(arr); // Output: []
```

Is optional chaining same as ternary operator?
```
Use Case:

->Optional chaining is specifically for safely accessing properties or methods on objects that might be null or undefined.
->Ternary operator is used for conditionally choosing between two values or expressions.

Syntax:

->Optional chaining uses ?. to access properties/methods.
->The ternary operator uses ? : to return one value or another based on a condition.

Behavior:

->Optional chaining short-circuits and returns undefined if a reference is null or undefined.
->The ternary operator returns one of two values based on the evaluation of a condition.

Example Combining Both:
let user = {
  profile: {
    name: "Alice"
  }
};

let userName = user?.profile?.name ? user.profile.name : "Unknown";
console.log(userName);  // Output: "Alice"

let userAddress = user?.address?.city ? user.address.city : "Not available";
console.log(userAddress);  // Output: "Not available"

```

Prototypical Chain in JS
```
Search it up on GPT.
```
this keyword in JS
```
Search it up on GPT.
```
DOT Notation Vs Bracket Notation in JS
```
Search it up on GPT.
```