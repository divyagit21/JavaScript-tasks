const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        var section = entry.target;
        var target = section.classList[1].replace("section", "");
        var line = document.querySelector(`.line${parseInt(target)}`);

        if (entry.isIntersecting) {
            document.querySelectorAll('.line').forEach(line => {
                line.classList.remove('visible');
            });
            line.classList.add('visible');
        } else {
            line.classList.remove('visible');
        }
    });
}, {
    rootMargin: '0px',  
    threshold: 0.5,     
});

var sections = document.querySelectorAll('.section');
sections.forEach(section => {
    observer.observe(section);
});
