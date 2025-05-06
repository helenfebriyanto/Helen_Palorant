const menu = document.getElementById("navbar-link");
const hamburger = document.getElementById("hamburger");

var isActive = false;

hamburger.addEventListener("click", () => {
    if (!isActive){
        menu.classList.add("active");
        menu.classList.remove("inactive");
        isActive = !isActive;
    }else{
        menu.classList.add("inactive");
        menu.classList.remove("active");
        isActive = !isActive;
    }

    hamburger.classList.toggle("active");
});