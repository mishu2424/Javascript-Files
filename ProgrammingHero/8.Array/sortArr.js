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