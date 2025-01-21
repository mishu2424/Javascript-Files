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
