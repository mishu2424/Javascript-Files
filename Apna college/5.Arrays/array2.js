//practical questions
//Create an array to store companies -> 'Blooberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'.

//a.Remove the first company from the array.
//b.Remove Uber and Add Ola in its place.
//c.Add Amazon at the end.

let companies=['Blooberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];
//a
let delItem=companies.shift();
console.log(`Array after deleted ${delItem} :`,companies)
//b
companies.splice(1,1,'Ola');
console.log('Array after adding Ola and removing Uber :',companies)
//c
companies.push('Amazon');
console.log('Array after adding Amazon at the end :',companies)
