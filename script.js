
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if(target){
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


window.addEventListener('load', () => {
    const header = document.querySelector('header');
    if(window.innerHeight < 600){
        header.style.minHeight = '60vh';
    }
});
