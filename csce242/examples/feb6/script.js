const showHideNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
}

document.getElementById("hamburger").onclick = showHideNav;