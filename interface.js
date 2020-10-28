let navbar;
let sideMenu;
let navbarHidden = true;
let sideMenuHidden = true;

window.onload = () => {
    navbar = document.getElementById('navbar');
    sideMenu = document.getElementById('side-menu-items');

    document.getElementById('hamburger-button').onclick = () => {
        if (navbarHidden) {
            navbar.style.display = 'flex';
            navbar.style.opacity = '1';
        } else {
            navbar.style.display = 'none';
            navbar.style.opacity = '0';
        }
        navbarHidden = !navbarHidden;
    }

    document.getElementById('side-menu-button').onclick = () => {
        console.log(sideMenuHidden);
        if (sideMenuHidden) {
            sideMenu.style.display = 'block';
            sideMenu.style.width = '50vw';
        } else {
            sideMenu.style.display = 'none';
            sideMenu.style.width = '0';
        }
        sideMenuHidden = !sideMenuHidden;
    }

    document.getElementById('close-side-menu-button').onclick = () => {
        sideMenu.style.display = 'none';
        sideMenu.style.width = '0';
        sideMenuHidden = true;
    }
}

// because js applies style inline in html and it has to be cleared
window.onresize = () => {
    if (window.innerWidth > 560) { // not a mobile device anymore
        navbar.style.display = 'flex';
        navbar.style.opacity = '1';
        for (const property of sideMenu.style) {
            sideMenu.style.removeProperty(property);
        }
    } else {
        navbar.style.display = 'none';
    }
}

