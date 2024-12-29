//Normal Function
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3));
//doing the same thing using arrow function
//Arrow Function
const arrowSum = (a, b) => {
  return a + b;
};
//Here, arrowSum is just a variable where a function is stored.So don't think the returned value is going to be stored in the arrowSum variable.
console.log(arrowSum); //a whole function is stored in this variable.
console.log(arrowSum(2, 3));

//Practice Question
//Create a function using the 'function' keyword that takes a String as an argument and returns the number of vowels in the string.
function countVowels(msg) {
  let count = 0;
  for (let val of msg) {
    if (
      val === "a" ||
      val === "e" ||
      val === "i" ||
      val === "o" ||
      val === "u"
    ) {
      count++;
    } else {
      continue;
    }
  }
  console.log(
    `Total Number of vowels in the string ${msg} : ${count} (using NORMAL ${typeof countVowels})`
  );
}
countVowels("Barsha");

//Doing the same task using arrow function

const vowelsCount = (msg) => {
  let count = 0;
//   Could've also done it with this approach
//   for (let i = 0; i < msg.length; i++) {
//     console.log(msg[i]);
//   }
  for (let val of msg) {
    if (
      val === "a" ||
      val === "e" ||
      val === "i" ||
      val === "o" ||
      val === "u"
    ) {
      count++;
    } else {
      continue;
    }
  }
  console.log(
    `Total Number of vowels in the string ${msg} : ${count} (using ARROW ${typeof vowelsCount})`
  );
};
vowelsCount("Barsha");
