const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const highlightItems = () => {
    let count = 0;
    const interval = setInterval(() => {

        //remove the highlight from everyone
        const allSections = document.querySelectorAll(".items section");

        allSections.forEach((section) => {
            section.classList.remove("highlighted");
        });

        count++;
        if (count > document.querySelectorAll(".items section").length) {
            //clearInterval(interval);
            count = 0;
        } else {
            const currentSection = document.querySelector(`.items section:nth-child(${count})`);
            //add the highlight
            currentSection.classList.add("highlighted");
        }
    }, 500);
}

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    highlightItems();
};