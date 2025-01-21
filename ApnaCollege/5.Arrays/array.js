//Practice Question
// For a given array with marks of students -> [85,97,44,37,76,60].
// Find the average marks of the entire class.

let marks=[85,97,44,37,76,60];
let sum=0;
for(let mark of marks){
    sum+=mark;
}
console.log(`Average of ${marks} is: ${sum/marks.length}`)

//For a given array with prices of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 10% OFF on them. 
// Change the array to store final price after applying offer.
let prices=[250, 645, 300, 900, 50];
for(let price in prices){
    prices[price]=(prices[price] - (0.10*prices[price]))
}
console.log(prices)

let foods=['lemons','Tea','Tomatoes'];
foods.unshift('Rice'); //adds items at the start.
foods.push('Burger','Lentil','Chips'); //add items to the end. 
console.log(foods);

let movies=['Antman', 'Avengers Infinity', 'Civil War'];
movies.pop();
movies.shift();
console.log(movies);

let movies2=['Antman', 'Avengers Infinity', 'Civil War'];
movies2.toString();
console.log(movies2)

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

let newArray=[3, 5, 6, 7, 8, 9, 2];
console.log(newArray.splice(3)) //output - [ 7, 8, 9, 2 ]. will delete everything from index 3.
console.log('Changed Array :',newArray) //output- [ 3, 5, 6 ].