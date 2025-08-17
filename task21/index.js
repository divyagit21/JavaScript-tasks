var observer=new IntersectionObserver(entries=>{
    var arrow=entries[0];
    arrow.target.classList.toggle("add",arrow.isIntersecting)
},{
    rootMargin:"100px"
})
var arrow=document.querySelector('.image')
observer.observe(arrow)