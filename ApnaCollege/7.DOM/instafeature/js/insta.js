const icon=document.getElementById('love-icon');
const icon2=document.getElementById('love-icon2');
const cardImg=document.getElementById('card-img');

console.log(icon)
let check=0;
cardImg.addEventListener("dblclick",()=>{
    icon.classList.remove('scale-0');
    icon.classList.add('text-red-600','scale-125','duration-500');
    icon2.classList.remove('ri-heart-line');
    icon2.classList.add('ri-heart-fill','text-red-600');
    setTimeout(()=>{
        icon.classList.remove('scale-125','duration-500');
        icon.classList.add('scale-0');
    },1000);
    check=1;
})

icon2.addEventListener("click",()=>{
    if(check===0){
        icon2.classList.remove('ri-heart-line');
        icon2.classList.add('ri-heart-fill','text-red-600');
        icon.classList.add('text-red-600','scale-125','duration-500');
        setTimeout(()=>{
            icon.classList.remove('scale-125','duration-500');
            icon.classList.add('scale-0');
        },1000);
        check=1;
    }
    else if(check===1){
        icon2.classList.add('ri-heart-line');
        icon2.classList.remove('ri-heart-fill','text-red-600');
        check=0;
    }
})