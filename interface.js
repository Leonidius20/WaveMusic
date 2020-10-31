const MOBILE_WIDTH = 560;
const DESKTOP_WIDTH = 1280;
const MOBILE_NAVBAR_PADDING = '35px';

let navbar;
let sideMenu;
let navbarHidden = true;
let sideMenuHidden = true;

window.onload = () => {
    navbar = document.getElementById('navbar');
    sideMenu = document.getElementById('side-menu-items');

    document.getElementById('hamburger-button').onclick = () => {
        if (navbarHidden) {
            navbar.style.maxHeight = '101vh';
            navbar.style.paddingTop = MOBILE_NAVBAR_PADDING;
        } else {
            navbar.style.maxHeight = '0';
            navbar.style.paddingTop = '0';
        }
        navbarHidden = !navbarHidden;
    }

    document.getElementById('side-menu-button').onclick = () => {
        console.log(sideMenuHidden);
        if (sideMenuHidden) {
            sideMenu.style.width = '50vw';
        } else {
            sideMenu.style.width = '0';
        }
        sideMenuHidden = !sideMenuHidden;
    }

    document.getElementById('close-side-menu-button').onclick = () => {
        closeSideMenu();
    }
}

// because js applies style inline in html and it has to be cleared
window.onresize = () => {
    if (window.innerWidth > MOBILE_WIDTH) { // not a mobile device anymore
        navbar.style.removeProperty('max-height');
        navbar.style.removeProperty('padding-top');
        navbarHidden = true;
        for (const property of sideMenu.style) {
            sideMenu.style.removeProperty(property);
        }
        sideMenuHidden = true;
    }
}

function closeSideMenu() {
    if (window.innerWidth < DESKTOP_WIDTH) { // on tablet and mobile devices
        sideMenu.style.width = '0';
        sideMenuHidden = true;
    }
}

function onSideMenuItemSelected() {
    closeSideMenu();
}

function closeNavBar() {
    if (window.innerWidth <= MOBILE_WIDTH) { // on mobile devices
        navbar.style.maxHeight = '0';
        navbar.style.paddingTop = '0';
        navbarHidden = true;
    }
}