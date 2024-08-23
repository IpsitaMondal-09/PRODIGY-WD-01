const mainMenu = document.querySelector( '.main-head');
window.addiEventListener('scroll', ()=>  {
    
    if(window.scrollY > 50) {
        mainMenu.classList.add('scrolled');
    } else {
        mainMenu.classList.remove('scrolled');
    }
});
