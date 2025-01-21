What is Javascript?
```
JS(officially called ES6 AKA ECMASCRIPT6) is a Programming language which we use to give instructions to the computer.
```
What is Variable?
```
Variable is what contains the data or values meaning it works as a container which store values. The value or values can change.
In JS, variables are dynamically typed meaning the data types of variables don't need to fixated. It can change any time.For example,
If we store a name in a variable-
fName='Mishu';
Now that we stored a String in this variable, it doesn't mean fName variable always has to be a dta type of String. We can change and store any other type of data type in this fName variable.
fName=45;|fName=null;
*Variables are case sensitive in JS. Meaning there is a difference between apple and Apple. a & A are not same in JS.
*Variables can be defined using only letters, digits, underscore( _ ), $ are allowed. Not even spaces or special characters.
*Only a letter, underscore or $ should be 1st character of JS. 123fName='Mishu'; <- it is NOT allowed.
*Reserved words cannot be named variables.

*Different variable cases->
fullname- Normal case
fullName- Camel case <-- We always use this case in JS.
full_name- Snake case
full-name- Kebab Case
FullName- Pascal case

*There are three ways to declare variables->
1.var (We used to use this before 2015 until let, const were introduced.It can be re-declared and be updated. It is a GLOBAL scope variable.)
2.let (It cannot be re-declared but can be updated. It is a BLOCK scope variable.)
3.const (It cannot be re-declared and cannot be updated. It is a BLOCK scope variable.)
```

Data Types in JS?
```
There are two types of data types-
1.Primitive data type (7). -> Number, String, Boolean, Undefined, Null, BigInt, Symbol.
2.Non-Primitive data type (objects)- > Arrays, Functions.
Arrays are stored in key : value in pairs in array.
const student = {
    fName : 'Apurbo Dey Mishu',
    age : 25,
    cgpa : 3.89,
    isPass : true
};
console.log(student["fName"])
console.log(student.age)
Now suppose we want to change the value of cgpa,we can do so like this-
student.cgpa= 3.98;
console.log(student.cgpa) the value will be 3.98.
Now the question arises that as per declaration, student variable was declared as const type and now changed the value of cgpa. How does it work?
-> As we have created an object inside the constant variable, just because we changed a key inside the object, doesn't really changed the entirety of it.
```
Type Conversion
```
Type Conversion is the process of converting a value from one type to another. JavaScript has two types of type conversion: implicit and explicit.
Implicit type conversion, also called type coercion, occurs when JavaScript automatically converts a value from one type to another, usually based on the context. 
Example 1: String and Number
JavaScript automatically converts numbers to strings when used in string operations.
let num = 5;
let str = "The number is " + num;  // Concatenation happens here
console.log(str);  // Output: "The number is 5"
In the above example, num is a number, and when it’s concatenated with the string "The number is ", JavaScript automatically converts the number 5 to a string.
Example 2: Implicit Conversion during Arithmetic Operations
When you use the + operator with a string and a number, JavaScript converts the number to a string.

let result = "10" + 5;  // Here, JavaScript converts 5 to "5"
console.log(result);  // Output: "105"
Here, "10" is a string, and 5 is a number. JavaScript automatically converts 5 to a string and then concatenates them, resulting in "105" instead of
 performing arithmetic addition.
But when you use other arithmetic operators like -, *, or /, JavaScript will attempt to convert the string to a number:

let result = "10" - 5;  // Here, JavaScript converts "10" to 10 (a number)
console.log(result);  // Output: 5
Since - is an arithmetic operator, JavaScript converts "10" to a number and performs the subtraction.

2. Explicit Type Conversion
Explicit type conversion happens when you manually convert a value from one type to another using JavaScript’s built-in functions like Number(), String(), Boolean(), etc.
Example 1: Converting a String to a Number
You can use Number() to explicitly convert a string or other values into a number.
let str = "123";
let num = Number(str);  // Explicit conversion to a number
console.log(num);  // Output: 123 (as a number)
If the string cannot be converted to a valid number, it will return NaN (Not-a-Number):
let str = "Hello";
let num = Number(str);  // Attempting to convert a non-numeric string
console.log(num);  // Output: NaN
Example 2: Converting a Number to a String
You can use String() to explicitly convert a number to a string.
let num = 123;
let str = String(num);  // Explicit conversion to a string
console.log(str);  // Output: "123"
Example 3: Converting a Value to a Boolean
You can use Boolean() to explicitly convert a value to a boolean (true or false).
let value = 0;
let bool = Boolean(value);  // Converts 0 to false
console.log(bool);  // Output: false
Example 4: Using parseInt() and parseFloat()
These are other explicit conversion functions used to convert strings to integers or floating-point numbers.
let str1 = "123.45";
let num1 = parseInt(str1);  // Converts to integer
console.log(num1);  // Output: 123

let str2 = "123.45";
let num2 = parseFloat(str2);  // Converts to float
console.log(num2);  // Output: 123.45
parseInt() will parse the string as an integer and ignore the decimal part.
parseFloat() will parse the string as a floating-point number.
```

Unary Operators

```
++,--
a++/a=a+1;
a--/a=a-1;
```

Assignment Operators
```
+,-,*,/,%,**
```
Comparison Operators
```
==,===(Equal to and type),!=,!==(Not equal to and type), >, >=, <, <=
let a=5;
let b="5";
console.log(a==b) //returns true in JS.

console.log(a===b) //returns false in JS.
```

Logical Operators
```
Logical AND &&
Logical OR ||
Logical NOT !
```

Conditional Operators
```
We need these operators to control behavior code. To determine a piece of code can run under certain conditions.
if-else,else if
```

Ternary Operators
```
Condition ? true output : false output
age>18 ? 'adult' : 'not adult';
```
 

Loops
```
Loops are used to execute a piece of code again and again.
types->
1.for loop
2.while loop
3.do-while loop
4.for-of loop (We use it for Strings and Arrays)
5.for-in loop (We use it for Objects,Arrays)

Infinite loop: A loop that never ends.
```

Strings
```
String is a sequence of characters used to represent text.Strings are IMMUTABLE in JS.
String Properties-
String length->
string.length
String Indices->
string[0],string[1],...

String Methods-
str.toUpperCase();
str.toLowerCase();
str.trim(); //remove the starting and ending whitespaces; not the one that is between words.
str.slice(start,end);
string.slice(start); //will print until the last index.
str1.concat(str2);
str.replace(searchValue,newValue); //this change the first searchValue in the entire string.
str.replaceAll(searchValue,newValue); //this changes all the searchValue that exist in the entire string.
str.charAt(index);
str.includes(searchValue); //returns true or false
str.endsWith(searchString) //returns true or false
str.endsWith(searchString, endPosition) //returns true or false
const mood = 'Happy! ';
console.log(`I feel ${mood.repeat(3)}`); // Expected output: "I feel Happy! Happy! Happy! "
String.split() //returns an array
split(separator)
split(separator, limit)
const myString = "Hello World. How are you doing?";
const splits = myString.split(" ", 3);
console.log(splits); // [ "Hello", "World.", "How" ]
str.startsWith();
str.endsWith();
These methods don't change the original string but creates a new string instead. As Strings are IMMUTABLE in JS meaning we can't change the original string. We can create a new string and then give it a new string value but can't do any modification in the original one. 

Difference between Properties and Methods?
->Properties are data that describe the state of the object.
->Methods are functions that describe what the object can do or its behavior.
```

Template Literals
```
A way to have embedded expressions in strings.
`This is a template literal`
```
String Interpolation
```
To create strings by doing substitution of placeholders.
`String text ${expression} string text`
```

Escape characters
```
console.log('Hello\nWorld')
console.log('Hello\tWorld')
Here the length of 'Hello\nWorld' or 'Hello\tWorld' will be 11 as \n or \t (ESCAPE CHARACTERS) will be considered as 1 character.
```

Array
```
Collection of items. Values are stored in a linear fashion, meaning values are being store in a single line fashion. ALSO ARRAYS ARE MUTABLE IN JS. MEANING WE CAN CHANGE IT'S VALUE USING INDEX. 
let arr=['ironman','hulk','thor'];
let arr2=[65,46,42,23];
let arr3=['mishu',24,'Sylhet'];

Array Properties
arr2.length;

typeof arr,arr2,arr3 ->object. Arrays are object type in JS.

Array Indices
arr[0],arr[1],...

Array Methods
To add to the array
push() //add to the end.Change the original array.
unshift() // add at the start.Change the original array.

To remove from the array
pop() //removes from the end and returns the removed item.Change the original array.
shift() //removes from the start and returns the removed item. Change the original array.

toString() //converts any array to a string. Doesn't change the original array.
concat() //Doesn't change the original array.
arr1.concat(arr2);
arr1.concat(arr2,arr3,...);
arr.includes(searchValue);

slice(startIndex,endIndex);
slice(startIndex); //will print until the last index.Doesn't change the original array.


splice(add,remove,replace); //change the original array. Also returns the result.
let splicedArray=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//adding new numbers at index 3, not removing anything.
splicedArray.splice(3,0,67,90);
console.log(`After adding two new number from on index 3 : ${splicedArray}`);

//deleting 
splicedArray.splice(5,1);
console.log(`After deleting number from index 5 : ${splicedArray}`)

//replacing the numbers at index 3 with 1,2
splicedArray.splice(3,2,1,2);
console.log(`After replacing numbers from index 3 and also deleting two numbers after index 3 : ${splicedArray}`)

// We can add as many as we want
splicedArray.splice(3,2,1,2,6,7);
console.log(splicedArray);


arr.join()
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"


arr.map()
const array1 = [1, 4, 9, 16];
// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);

arr.filter()
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);
console.log(result);
```

Functions
```
Block of code that performs a specific task, can be invoked whenever needed. It minimizes the redundancy of the code.

Function Definition->
function functionName(parameter){ //function's parameters are like local variables that exist only within the block scope'{}' of the function.

}

Function call->
functionName(argument);
```

Arrow Functions
```
Compact way of writing a function.
const functionName = (param1, param2...) => {
    //do some work
}
```
Argument in JS is an array like object
```
function numbers(num1,num2){
    console.log(num1,num2) //1 2
    console.log(arguments) //[Arguments] { '0': 1, '1': 2, '2': 4, '3': 6, '4': 7 }
}
numbers(1,2,4,6,7)
```

Functions vs Methods
```
Functions that are attached with data-structures are called Methods.
```
forEach Loop in Arrays
```
We pass functions as parameters in the loop.
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
```

Interview Question: What is Higher Order Function/Method?
```
Higher order functions or methods are those functions/methods that can pass another function as parameter or return a function.
forEach, map, filter, and reduce are all higher order methods/functions.
```

Map Method
```
Creates a new array with the results of some operation. The value its callback returns are used to form new array.
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
```

Difference Between forEach and map 
```
map returns a new array after the operation while forEach doesn't return any new Array for us. It just does the operation.
```

Filter Method
```
Creates a new array of elements that give true for a condition/filter.
//filter
let simpleNumbers=[2,4,5,7,6,10,20,8];
const evenArr=simpleNumbers.filter((val)=>{
    return val%2===0 && val>6;
})
console.log(evenArr)
```

Reduce Method
```
Performs some operations and reduces the array to a single value. It returns that single value.
for an example, if we want to get average of an array, or calculating sum or finding maximum number etc. etc. meaning, we are taking multiple input but returning only one output based on the condition.
//Reduce 
const arr1 = [2, 4, 6, 8];
const sum = arr1.reduce((res, currentVal)=>{
    return res + currentVal;
})
console.log('Sum using reduce method', sum)

//maximum
const max=arr1.reduce((prev,currentVal)=>{
    return prev > currentVal ? prev : currentVal;
})
console.log('Maximum', max)
```

Reverse Method
```
//ways to reverse an array
const arr=[1, 2, 3, 4, 5, 6, 7];
console.log(arr.reverse());

//another way
const arr1=[1, 2, 3, 4, 5, 6, 7];
let revArr=[];
for(let val of arr1){
    revArr.unshift(val);
}
console.log('Using for-of',revArr)

//another way
const arr2=[1, 2, 3, 4, 5, 6, 7];
let revArr2=[];
for(let i = arr2.length - 1; i>=0; i--){
    revArr2.push(arr2[i])
}
console.log('Using normal for loop', revArr2)
//another way
const arr3=[1, 2, 3, 4, 5, 6, 7];
let revArr3=[];
for(let i = 0; i<arr3.length; i++){
    revArr3.unshift(arr3[i])
}
console.log('Using normal for loop 2', revArr3)
```
Sort Method
```
const nums = [5, 6, 7, 6, 3, 6, 4];
console.log(nums.sort());

const names = ["rakib", "sokib", "gajib", "sojib"];
//ascending order
console.log(names.sort());

//descending order
console.log(names.sort().reverse());

//But there is a catch!
const numbers = [3, 5, 15, 36, 100, 1];
//now, if we sort this array
console.log(numbers.sort());
//output- [ 1, 100, 15, 3, 36, 5 ].
//How come 100 is before 3 or other smaller numbers?
//It's because in JS sort() method sorts the array considering every elements as a string(ASCII characters).
//Based on the ASCII chart, the value of 1 is smaller than 3, 5, ...
//So, it doesn't what is after 1, which in our case is 100.
//Hence why it puts 100 before 3, 5, ...
//To solve this issue
const numbers2 = [3, 5, 15, 36, 100, 1];
console.log(numbers.sort((a,b)=>{
    return a - b ;
}))
//now we will get the expected output which is [ 1, 3, 5, 15, 36, 100 ].

//For descending order
console.log(numbers.sort((a,b)=>{
    return b - a ;
}))
//output -> [ 100, 36, 15, 5, 3, 1 ]

```
Swapping
```
//with temp variable
let temp;
let a = 2,
  b = 3;
console.log(`Before : a:${a},b:${b}`);
temp = a;
a = b;
b = temp;
console.log(`After : a:${a},b:${b}`);

//destructuring
let x = 5,
  y = 7;
console.log(`Before : a:${x},b:${y}`);
[x, y] = [y, x];
console.log(`After : a:${x},b:${y}`);

```

Summary
```
forEach function doesn't return any new array. It does any operation we tell it it do.

map method returns a new array after operation.goes through every elements.

filter method returns a new array after filtering out.

reduce method returns a single value out of plural outputs.


split() method converts a string into an array.
join() method converts an array into a string.
```

Objects
```
//ways to declare objects
//using object literal
const obj1={};
console.log(obj1);
//using new keyword
const obj2=new Object({Name:'Mishu', isMarried: true});
console.log(obj2);
//using Object.create() 
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

//You can stop the values from being changed by using Object.freeze()
Object.freeze(person) 

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
```

Js vs Array
```
1.Array stores values index wise(ordered/sequential collection). This is not applicable for Object.
2.Array can be accessed using index but object is accessed using key.
```

Date and time
```
console.log('1st->')
const today=new Date();
console.log(today) //2024-12-28T15:40:09.303Z
console.log(today.toLocaleString()) //2024-12-28, 10:40:09 a.m.
console.log(today.toLocaleString("en-US")) //12/28/2024, 11:12:34 AM
console.log(today.toLocaleTimeString()) //10:40:09 a.m.
console.log(today.toLocaleDateString()) //2024-12-28
console.log(today.toDateString()) //Sat Dec 28 2024
console.log(today.toUTCString()) //Sat, 28 Dec 2024 16:19:23 GMT
//right now, the time is 10:55am
console.log(today.getHours()) //10
console.log(today.getMinutes()) //55

//One thing to remember, JS Date() function when passing a string as param considers the
//months and the names of day(sat,sun,mon,..) as indices of array.
//if it's january, it will return 1. 

console.log('2nd->')
const date=new Date('2023-10-24');
console.log(date) //2023-10-24T00:00:00.000Z
console.log(date.getDate()) //23
console.log(date.getDay()) //1
console.log(date.getMonth()) //9
console.log(date.getFullYear()) //2023

//If you don't pass a string as date, but number.
//In this case you should remember that the month january starts from index 0. So if you think of December, write 11.
console.log('3rd->')
const anotherDate= new Date(2062,11,24)
console.log(anotherDate) //2062-12-24T05:00:00.000Z
anotherDate.setDate(10)
console.log(anotherDate) //2062-12-10T05:00:00.000Z
console.log(anotherDate.toLocaleString('en-US')) //US time(m/d/y)- 12/10/2062, 12:00:00 AM
console.log(anotherDate.toLocaleString('en-GB')) //Great Britain Date format(d/m/y) - 10/12/2062, 00:00:00


// Sometimes even the US needs 24-hour time
console.log(date.toLocaleString("en-US", { hour12: false }));
// "10/23/2023, 20:00:00"



const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
// Here’s what each part of the options object means:
// weekday: "long": This means you want the full name of the weekday (like "Monday" or "Tuesday").
//  If you used "short", it would show the abbreviated version of the weekday (like "Mon" or "Tue").
// year: "numeric": This means you want to display the full year (like "2024"). If you used "2-digit",
//  it would show just the last two digits of the year (like "24").
// month: "long": This specifies that you want the full name of the month (like "December").
//  If you used "short", it would show the abbreviated name (like "Dec").
// day: "numeric": This means you want to display the day of the month as a number (like "28" for the 28th).
//  If you used "2-digit", it would show the day with two digits (like "08" for the 8th).

// An application may want to use UTC and make that visible
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(today.toLocaleString("en-US", options));
// Saturday, December 28, 2024 at UTC
```
Math Functions
```
//Math Functions

const max=Math.max(2, 6, 4, 10, 15, 2, 100, 1);
const min=Math.min(2, 6, 4, 10, 15, 2, 100, 1);
const PI=parseFloat(Math.PI.toFixed(2));
//absolute math function always returns positive number.
const abs=Math.abs(10);
const abs2=Math.abs(-10);
const abs3=Math.abs(5-10);
const abs4=Math.abs(10-5);

//Math.round(), Math.floor(), Math.ceil()
//Math.round() function always returns an integer number.
//if the value is for instance, 3.5, it will return 4. if it's below 3.5
//like 3.1/3.2/3.3/3.4. In this case, it will round to 3.
const rounded=Math.round(3.5);
const rounded2=Math.round(3.4);
console.log(rounded,rounded2)

//Math.floor() function always returns an integer number closest to its
//nearest small number. 
//if it's 3.1 or even if it's 3.9999 it will return 3 NOT 4.
const floored=Math.floor(3.1);
const floored2=Math.floor(3.999999);
console.log(floored,floored2)

//Math.ceil() function always returns an integer number closest to its
//nearest upper number.
//if it's 3.1 or even if it's 3.9999 it will return 4 NOT 3.
const ceiled=Math.ceil(3.1);
const ceiled2=Math.ceil(3.9999);
console.log(ceiled,ceiled2)


//random number generator
const rand=Math.random() //it returns a decimal number always 
//if you want to to get a integer number, let's say you want to get any random number
//until 20.
const roundedRandom=Math.round(rand*20);
console.log(roundedRandom)


//generating a random lottery number.
const lotteryFunc=()=>{
    const lotteryNumbers=[];
    while(lotteryNumbers.length<6){
        const roundedRandom2=Math.round(Math.random()*9);//adding 2 with each number
        if(lotteryNumbers.indexOf(roundedRandom2)==-1) { 
            lotteryNumbers.push(roundedRandom2) 
        }
    }
    return lotteryNumbers;
}

const lotteryNumbs=lotteryFunc();
console.log(lotteryNumbs.join('')) //Expected Outputs - 436170, 635287, 713465, 423750 etc.
```