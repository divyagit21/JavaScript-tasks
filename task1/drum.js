function player() {
    const allkeys = document.querySelectorAll('.key');
    const handleplay = (e) => {
        const selected = e.target;
        const music = selected.querySelector('audio');
        if (music) {
            music.play()
        }
    }
    const handlekey=(e)=>{
        const key=e.key.toUpperCase();
        const selectedkey=document.querySelector(`.key[data-key="${key}"]`)
        if(selectedkey){
            handleplay({target:selectedkey})
        }
    }
    allkeys.forEach(keys=>{
        keys.addEventListener('click',handleplay);
        keys.addEventListener('mouseenter',()=>{
            keys.style.transform='scale(1.2)';
        })
        keys.addEventListener('mouseleave',()=>{
            keys.style.transform='scale(1)';
        })
    });
    window.addEventListener('keydown', handlekey);
}
player();