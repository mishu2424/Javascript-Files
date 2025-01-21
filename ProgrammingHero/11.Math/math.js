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
//if you want to to get an integer number, let's say you want to get any random number
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