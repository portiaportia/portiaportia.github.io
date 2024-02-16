let interval;
let count = 0;

const highlightItems = () => {
  interval = setInterval(() => {
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
      const currentSection = document.querySelector(
        `.items section:nth-child(${count})`
      );
      //add the highlight
      currentSection.classList.add("highlighted");
    }
  }, 500);
};

highlightItems();
