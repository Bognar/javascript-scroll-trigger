window.onscroll = () => { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("firstfly").style.left = "210px";
    }
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("secondfly").style.left = "210px";
    }
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById("thirdfly").style.left = "210px";
    }
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
        document.getElementById("fourthfly").style.left = "210px";
    }
}

/* for those who need explicit place where they need to trigger it, please scroll website until place they want to trigger slide and use
Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
in console to get positions */