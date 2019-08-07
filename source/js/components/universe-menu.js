if (document.querySelector(".universe-menu") !== null) {

    navbar = document.querySelector(".universe-menu");

    if (document.querySelector(".universe-cover") == null) {
        sticky = 0
        navbar.classList.add("sticky")
    } else {
        sticky = document.querySelector(".universe-cover").offsetHeight
    }

    var sticky = sticky - navbar.offsetHeight;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
    
    window.onscroll = function() {myFunction()};
}



