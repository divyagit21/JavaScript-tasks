document.addEventListener('keydown',(e)=>handleKey(e));
function handleKey(e){
    var f=document.querySelector('.info1')
    var s=document.querySelector('.info2')
    var t=document.querySelector('.info3')
    f.innerText=e.key;
    s.innerText=e.keyCode;
    t.innerText=e.code;
}