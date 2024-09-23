let scrollToTopBtn =document.getElementById('scrollToTopBtn');

window.onscroll= scrollFunction();

function scrollFunction(){
    if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
        scrollToTopBtn.style.display
    }
}