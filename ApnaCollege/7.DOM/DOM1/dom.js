console.dir(document.getElementById(1));
let p=document.querySelector('p');
p.innerHTML=p.innerHTML+' '+'From Apna College';

const para = document.createElement("p");
para.textContent = "We hope you are enjoying it so far.";
let parentDiv=document.querySelector('.parent-div');
parentDiv.appendChild(para)

const divs=document.querySelectorAll('.myDiv');
// const para1 = document.createElement("h1");
// para1.textContent = "Div 1";
// divs[0].appendChild(para1);
// const para2 = document.createElement("h3");
// para2.textContent = "Div 2";
// divs[1].appendChild(para2);
// //another way
// divs[2].innerHTML='Div 3'

//another way
let val=1;
for(let div of divs){
    div.innerHTML=`div ${val}`;
}

let btn=document.createElement('button')
btn.innerHTML='click me';
btn.style.backgroundColor='red'
btn.style.color='white'
parentDiv.prepend(btn)

let nP=document.querySelector('.myP');
nP.setAttribute('class', 'myPara');
parentDiv.append(nP);

nP.classList.remove('myPara')
nP.classList.add('newPara')


let container=document.querySelector('.container');
let childContainer=container.querySelector('.child-container')
let anotherDiv=document.createElement('div')
anotherDiv.classList.add('grandchild-div');
childContainer.prepend(anotherDiv);

let count=0;
while(count<5){
    let grandGrandChild=document.createElement('div');
    let className=`div${count+1}`;
    let idName=`id${count+1}`;
    grandGrandChild.setAttribute('class',className)
    grandGrandChild.setAttribute('id',idName)
    anotherDiv.append(grandGrandChild);
    count++;
}

let otherCount=0;
while(otherCount<5){
    let siblings=anotherDiv.querySelector(`#id${otherCount+1}`)
    siblings.innerHTML=`<p>div ${otherCount+1}</p>`
    otherCount++;
}