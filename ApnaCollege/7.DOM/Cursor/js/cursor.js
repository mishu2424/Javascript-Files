const body=document.querySelector('body');
const cursor=body.querySelector('.cursor');
body.addEventListener("mousemove",(e)=>{
    cursor.style.left=e.x+"px";
    cursor.style.top=e.y+"px";
    cursor.classList.add('duration-100','ease-linear');
})