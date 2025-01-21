var arr = [
  {
    dp: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1669951867704-a78fd21fbbd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1683817138631-c5fb4990d01d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
    story: "https://plus.unsplash.com/premium_photo-1683817397904-d4465651a071?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1683817138229-f04cd6ba35e9?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3w0fHx8ZW58MHx8fHx8",
    story: "https://plus.unsplash.com/premium_photo-1683817138643-ead97ce3096b?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wzfHx8ZW58MHx8fHx8",
  },
  {
    dp: "https://images.unsplash.com/photo-1579105728744-9d6b14a45389?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    story: "https://images.unsplash.com/photo-1580019598984-ae6ef6a9ff7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1531300185372-b7cbe2eddf0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    story: "https://images.unsplash.com/photo-1532076904124-d4e8fe7fbbec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
  },
];

var stories=document.querySelector('.stories');
var storyImg=document.querySelector('.story-img')
var clutter="";
arr.forEach((elem,idx)=>{
    clutter+=`<div class="story w-24 h-24 rounded-full border border-red-600 inline-block overflow-hidden duration-500">
                        <img id=${idx} src="${elem.dp}" alt="" class="w-full h-full object-cover object-top">
                    </div>`;
})
stories.innerHTML=`${clutter}`
stories.addEventListener("click",(event)=>{
    if (event.target.tagName.toLowerCase() === 'img'){
        storyImg.classList.add('scale-100');
        storyImg.classList.remove('scale-0');
        storyImg.style.display="block";
        url=arr[event.target.id].story;
        storyImg.style.backgroundImage=`url(${url})`
        setTimeout(()=>{
            storyImg.classList.add('scale-0');
        },2000);
    }
})

