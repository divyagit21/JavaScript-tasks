const intersection=new IntersectionObserver(
    entries=>{
        entries.forEach(card=>{
            card.target.classList.toggle("add",card.isIntersecting)
            if(card.isIntersecting){
                intersection.unobserve(card.target)
            }
        })
    },
    {
        threshold:1,
    }
);
var cards=document.querySelectorAll(".card");
cards.forEach(card=>{
    intersection.observe(card)
})

const lastcardobserver=new IntersectionObserver(entries=>{
    const lastcard=entries[0]
    if(!lastcard.isIntersecting){
        return 
    }
    loadNewCards()
    lastcardobserver.unobserve(lastcard.target)
    lastcardobserver.observe(document.querySelector('.card:last-child'))
},{
    rootMargin:'100px',
})
lastcardobserver.observe(document.querySelector('.card:last-child'))
var container=document.querySelector('.content')
function loadNewCards(){
    for(let i=0;i<10;i++){
        const card=document.createElement('div')
        card.textContent="New Card"
        card.classList.add("card")
        intersection.observe(card)
        container.append(card);
    }
}
