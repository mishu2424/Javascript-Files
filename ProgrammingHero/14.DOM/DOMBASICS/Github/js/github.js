const inputField=document.getElementById('deleteField');
inputField.addEventListener('keyup',(e)=>{
    const deleteBtn=document.getElementById('deleteBtn');
    if(e.target.value==='delete'){
        deleteBtn.removeAttribute('disabled');
        deleteBtn.addEventListener('click',()=>{
            document.getElementById('heading').style.display='none';
            inputField.value="";
        })
    }
    else{
        deleteBtn.setAttribute('disabled',true);
    }
})