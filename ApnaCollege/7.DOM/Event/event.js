const body=document.querySelector('body');
const mainContainer=document.createElement('div');
mainContainer.classList.add('main-container');
body.prepend(mainContainer);

const toggledButton=document.createElement('button');
toggledButton.innerText='Toggle';
toggledButton.setAttribute('id','button1');
mainContainer.append(toggledButton);

const p=document.createElement('p');
p.textContent='Hello';
mainContainer.append(p);

const btn=document.querySelector('#button1');

//One way ->
// let count=1;
// btn.addEventListener("click",()=>{
//     if(count%2!==0){
//         body.style.background='black';
//     }
//     if(count%2===0){
//         body.style.background='white';
//     }
//     count++;
// })

//another way ->
let mode='light';
btn.addEventListener('click',()=>{
    if(mode==='light'){
        mode='dark';
        body.classList.add('dark');
        body.classList.remove('light');
    }else{
        mode='light';
        body.classList.remove('dark');
        body.classList.add('light');
    }

})


const gallery=document.querySelector('.Gallery');
const myP=gallery.querySelector('p');
gallery.addEventListener('mouseover',()=>{
    myP.classList.add('duration-700')
})