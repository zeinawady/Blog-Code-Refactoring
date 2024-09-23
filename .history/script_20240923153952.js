let scrollToTopBtn =document.getElementById('scrollToTopBtn');

window.onscroll= scrollFunction(){
    if(document.body.scrollTop>100 || document.documentElement.scrollTop>100){
        scrollToTopBtn.style.display="block";
    }
    else{
        scrollToTopBtn.style.display="none";
    }
}

function toTop(){
    document.body.scrollTop=0;

}