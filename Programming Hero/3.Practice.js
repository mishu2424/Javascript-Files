// Write a Program to calculate the average marks of Mathematics(75.25), Biology(65), Chemistry(80), Physics(35.45) and Bangla(99.50).

var marks=[75.25,65,80,35.45,99.50]
var sum=0,count=0;
for (let i = 0; i < marks.length; i++) {
    sum+=marks[i];
    count+=1
}
console.log(parseInt((sum/count).toFixed(2)));
console.log(parseFloat((sum/count).toFixed(2)));
console.log(Number((sum/count).toFixed(2)));