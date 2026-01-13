//every one second go through and move the class of highlighted threw the gallery
//perfered solution
/*setInterval(()=>{
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
}, 500);*/

let count = 1; 

setInterval(()=>{
    //remove highlighted from every section
    document.querySelectorAll(".items section").forEach((section)=>{
        section.classList.remove("highlighted");
    });

    //add highlighting to the section with the current count
    document.querySelector(`.items section:nth-child(${count})`).classList.add("highlighted");

    count++;

    //if you reached the end of the list of sections
    if(count > document.querySelectorAll(".items section").length){
        count = 1;
    }
},500);