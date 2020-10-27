let navbar;
let navbarHidden = true;

window.onload = () => {
    navbar = document.getElementById('navbar');

    document.getElementById('hamburger-button').onclick = () => {
        if (navbarHidden) {
            navbar.style.display = 'flex';
        } else {
            navbar.style.display = 'none';
        }
        navbarHidden = !navbarHidden;
    }
}



