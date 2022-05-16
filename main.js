const navIconElt = document.querySelector('nav__icon'); 
const navCloseElt = document.querySelector('nav__close'); 
const navList = document.querySelector('nav__list'); 
const navBgOverlayElt = document.querySelector('nav__bgOverlay'); 

const navOpen = () => {
    navList.classList.add('show'); 
    navBgOverlayElt.classList.add('active'); 
    document.body.style = 'visibility: visible; height: 100vh; width: 100vw; overflow: hidden;'; 
}

const navClose = () => {
    navList.classList.remove('show'); 
    navBgOverlayElt.classList.remove('active'); 
    document.body.style = 'visibility: visible; height: initial; width: 100%; overflow-x: hidden;'; 
}

navIconElt.addEventListener('click', navOpen); 
navCloseElt.addEventListener('click', navClose); 
navBgOverlayElt.addEventListener('click', navClose); 
