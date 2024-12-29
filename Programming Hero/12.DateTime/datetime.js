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