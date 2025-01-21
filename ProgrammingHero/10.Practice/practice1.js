//Inch to feet
let inch=80;
let feet=(inch/12).toFixed(2)
console.log(`${inch} inch to feet : ${feet}`);

//another way
let feet2=Math.floor(inch/12);
let remainder=inch%12;
console.log(`${feet2} ft ${remainder} inch`)



//Miles to kilometers
let miles=10,kilometers=(miles/1000).toFixed(2);
console.log(`${miles} miles to kilometers : ${kilometers}`);