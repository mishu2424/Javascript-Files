//Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function checkEvenOrOdd(number) {
  if (number % 2 === 1) {
    return number * 2;
  }
  if (number % 2 === 0) {
    return number / 2;
  }
}

console.log(checkEvenOrOdd(9));
console.log(checkEvenOrOdd(10));

//Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function calcAvg(arr, len) {
  const sum = arr.reduce((prev, curr) => {
    return prev + curr;
  });
  return sum / len;
  // let res=0;
  // arr.forEach(element => {
  //   res+=element;
  //   return res;
  // });
  // return res / len;
}
console.log(calcAvg([2, 4], 2));

//Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

const count_zero = (str) => {
  let count = 0;
  for (let val of str) {
    if (val === "0") {
      count++;
    }
  }
  return count;
};

console.log(count_zero("0101001"));

//Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

const odd_even = (number) => {
  if (number % 2 === 0) {
    return ["even", number];
  }
  if (number % 2 === 1) {
    return ["odd", number];
  }
};
const res=odd_even(9);
console.log(`${res[1]} is ${res[0]}`);

