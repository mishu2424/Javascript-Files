// Write a code which can give grades to students according to their scores.

// When running alert(), prompt() we will have to use browser directly as Node.js doesn't allow this.
let score=prompt("Enter your score? ");

if(score >= 80 && score<=100){
    console.log('A');
}else if(score>=70 && score < 80){
    console.log('B');
}else if(score>=60 && score < 70){
    console.log('C');
}else if(score>=50 && score < 60){
    console.log('D');
}else if(score<=49){
    console.log('F');
}