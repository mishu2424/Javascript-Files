const btn=document.getElementById('action-btn');
let isFriend=false;
btn.addEventListener("click",()=>{
    if(isFriend===false){
        const currentStatus=document.getElementById("status");
        currentStatus.innerText="Friend";
        currentStatus.classList.add('text-green-900');
        currentStatus.classList.remove('text-black');
        btn.innerText="Cancel Request";
        btn.classList.add("bg-gray-500");
        btn.classList.remove("bg-blue-500");
        isFriend=true;
    }
    else if(isFriend){
        const currentStatus=document.getElementById("status");
        currentStatus.innerText="Stranger";
        currentStatus.classList.remove('text-green-900');
        currentStatus.classList.add('text-black');
        btn.innerText="Add Friend";
        btn.classList.remove("bg-gray-500");
        btn.classList.add("bg-blue-500");
        isFriend=false;
    }
    
})

const cardImg=document.querySelector('.card > img');
cardImg.addEventListener("mouseover",()=>{
    cardImg.setAttribute('src',"https://images.unsplash.com/photo-1462804993656-fac4ff489837?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D")
})
cardImg.addEventListener("mouseout",()=>{
    cardImg.setAttribute('src',"https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D")
})