//every one second go through and move the class of highlighted threw the gallery
setInterval(()=>{
    let currentSection = document.querySelector(".items section.highlighted");

    //highlight the first item
    if(currentSection == null) {
        document.querySelector(".items section").classList.add("highlighted");
        return;
    }

    let nextSection = currentSection.nextElementSibling;

    //hit the end
    if(nextSection == null){
        nextSection = document.querySelector(".items section");
    }

    currentSection.classList.remove("highlighted");
    nextSection.classList.add("highlighted");
}, 500);