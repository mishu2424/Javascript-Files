const body=document.querySelector('body');
const btn=document.createElement('button');
btn.innerText='Egg';
const btn2=document.createElement('button');
btn2.innerText='Milk';
const btn3=document.createElement('button');
btn3.innerText='Cookies';

body.prepend(btn,btn2,btn3);
const parentList=document.querySelector(".parent-list")


btn.addEventListener("click",()=>{
    let childParentList=document.createElement('div');
    childParentList.style.display='flex';
    childParentList.style.gap='2%';
    childParentList.style.padding='2px 0px';
    let li=document.createElement('li');
    li.innerHTML="Egg";
    li.style.marginRight='2em';
    let removeBtn=document.createElement('button');
    removeBtn.innerText='remove';
    childParentList.append(li,removeBtn)
    parentList.append(childParentList);
    removeBtn.addEventListener("click",()=>{
        childParentList.style.display='none';
    })
})
btn2.addEventListener("click",()=>{
    let childParentList=document.createElement('div');
    childParentList.style.display='flex';
    childParentList.style.gap='2%';
    childParentList.style.padding='2px 0px';
    let li=document.createElement('li');
    li.innerHTML="Milk";
    let removeBtn=document.createElement('button');
    removeBtn.innerText='remove';
    childParentList.append(li,removeBtn)
    parentList.append(childParentList);
    removeBtn.addEventListener("click",()=>{
        childParentList.style.display='none'
    })
})
btn3.addEventListener("click",()=>{
    let childParentList=document.createElement('div');
    childParentList.style.display='flex';
    childParentList.style.gap='2%';
    childParentList.style.padding='2px 0px';
    let li=document.createElement('li');
    li.innerHTML="Cookies";
    li.style.marginRight='2em';
    let removeBtn=document.createElement('button');
    removeBtn.innerText='remove';
    childParentList.append(li,removeBtn)
    parentList.append(childParentList);
    removeBtn.addEventListener("click",()=>{
        childParentList.style.display='none'
    })
})