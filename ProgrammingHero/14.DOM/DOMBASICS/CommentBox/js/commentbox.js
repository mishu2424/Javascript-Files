const commentBtn=document.querySelector('.commentBtn');
const commentBox=document.querySelector('.comment-box');
commentBtn.addEventListener("click",()=>{
    let commentedBox=document.createElement('div');
    commentedBox.classList.add("w-72", "h-auto", "bg-white", "rounded", "p-3")
    commentedBox.innerHTML=`
    <p class="text-sm">${commentBox.value}</p>
    `
    document.querySelector('.main-container').append(commentedBox);
    commentBox.value="";
    commentBtn.innerText="Sent";
    setTimeout(()=>{
        commentBtn.innerText="Send"
    },2000)
})