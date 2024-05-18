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
        nav.style.maxHeight = "400px"
    }else{
        iconMenu.classList.remove('fa-times');
        iconMenu.classList.add('fa-bars');
        nav.style.maxHeight = "0px"

        
    }
}
// Project
let navTabs = document.querySelectorAll('.sliderTab');
navTabs.forEach((item) => {
    console.log(item)
    item.addEventListener('click',(event) => {
    if(event.target.classList.contains('navItem')){
        let lastActive = item.querySelector('li.active');
        let newActive = event.target;
        let bgActive = item.querySelector('.bg-active');
        lastActive.classList.remove('active');
        newActive.classList.add('active');
        bgActive.style.left = newActive.offsetLeft + "px";

        let lastContentActive = item.querySelector('.tab.active')
        let newContentActive = document.getElementById(newActive.dataset.target);
        lastContentActive.classList.remove('active');
        newContentActive.classList.add('active');
    }
    })
})

// project
document.getElementById("next").onclick = () => {
    const widthItem = document.querySelector('.item').offsetWidth;
    
    document.getElementById("formList").scrollLeft += widthItem + 15 ;
}

document.getElementById("prev").onclick = () => {
    const widthItem = document.querySelector(".item").offsetWidth;
    document.getElementById("formList").scrollLeft -= widthItem + 15 ;

}

// search buuton
document.getElementById("btnSearch").onclick = () => {
    document.getElementById("overlay").style.display = "flex";
}
document.getElementById("close").onclick = () => {
    document.getElementById('overlay').style.display = "none";
}
