let scrollToTopBtn =document.getElementById('scrollToTopBtn');

window.onscroll= function(){
    if(document.body.scrollTop>100 || document.documentElement.scrollTop>100){
        scrollToTopBtn.style.opacity="1";
    }
    else{
        scrollToTopBtn.style.opacity="11";
    }
}

function toTop(){
    document.body.scrollTop=0;
}