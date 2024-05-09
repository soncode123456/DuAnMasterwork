// button dark theme
const btnDark = document.getElementById("btn-dark").parentNode;

btnDark.onclick = () => {
    var bodyElement = document.getElementById('bodyElement');

    var icon = document.getElementById("btn-dark")
    if(icon.classList.contains('fa-moon')){
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun')
        bodyElement.classList.add("dark")
    }else{
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        bodyElement.classList.remove("dark")
    }
}
// button menu
const btnBars = document.getElementById('btn-bars');
btnBars.onclick = () => {
    var nav = document.querySelector(".navbar-nav");
    
    var iconMenu = document.getElementById('icon_menu');
    if(iconMenu.classList.contains('fa-bars')){
        iconMenu.classList.remove('fa-bars');
        iconMenu.classList.add('fa-times');
        nav.style.maxHeight = "300px"
    }else{
        iconMenu.classList.remove('fa-times');
        iconMenu.classList.add('fa-bars');
        nav.style.maxHeight = "0px"

        
    }
}