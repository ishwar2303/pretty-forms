
function setHeaderOnScroll1() {

    var header = document.getElementById("pretty-forms-header")
    var backToTop = document.getElementById('back-to-top')
    let pageYoffset = window.pageYOffset
    if(pageYoffset > 105){
        header.className = 'sticky'
        backToTop.style.display = 'block'
    }
    else{
        header.className = 'non-sticky'
        backToTop.style.display = 'none'
    }
}
function setHeaderOnScroll2() {

    var header = document.getElementById("pretty-forms-header")
    var backToTop = document.getElementById('back-to-top')
    let pageYoffset = window.pageYOffset
    if(pageYoffset > 160){
        header.className = 'sticky'
        backToTop.style.display = 'block'
    }
    else{
        header.className = 'non-sticky'
        backToTop.style.display = 'none'
    }
}

var targetWidth = 600;
$(document).ready(() => {
    if ( $(window).width() > targetWidth) {   
        window.onscroll = function() {setHeaderOnScroll1()};
    }
    else {
        window.onscroll = function() {setHeaderOnScroll2()};
    }

})