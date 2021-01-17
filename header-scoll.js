
window.onscroll = function() {myFunction()};

function myFunction() {

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