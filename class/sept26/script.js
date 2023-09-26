const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const makeLoops = () => {
    const resultDiv = document.getElementById("result");
    const startNumber = parseInt(document.getElementById("txt-start-num").value);
    const endNumber = parseInt(document.getElementById("txt-end-num").value);

    if (isNaN(startNumber) || isNaN(endNumber)) {
        return;
    }

    if (startNumber >= endNumber) {
        return;
    }

    const ul = document.createElement("ul");
    resultDiv.append(ul);

    for (let i = startNumber; i <= endNumber; i++) {
        const li = document.createElement("li");
        li.textContent = i;
        ul.append(li);
    }

    /*for (let i = 0; i < 10; i++) {
        resultDiv.innerHTML += i + " ";
    } */
};

var width = 100;

const growButton = () => {
    width += 10;
    setSquareWidth();
};

const shrinkButton = () => {
    width -= 10;
    setSquareWidth();
};

const setSquareWidth = () => {
    document.getElementById("square").style.setProperty("--x", width + "px");
}

const eatFruits = () => {
    //const lis = document.getElementsByTagName("li") //selects even nav items :(
    const lis = document.querySelectorAll("#fruits li");

    for (let i in lis) {
        lis[i].innerHTML = "nononommm " + lis[i].innerHTML;
    }
}

const countNums = () => {
    let count = 0;
    let p = document.querySelector("#count");

    const updateCount = setInterval(() => {
        count++;
        p.innerHTML = count;

        if (count >= 10) {
            clearInterval(updateCount);
        }

    }, 1000);
}

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("button-for-loop").onclick = makeLoops;
    document.getElementById("button-grow").onclick = growButton;
    document.getElementById("button-shrink").onclick = shrinkButton;
    setSquareWidth();
    document.getElementById("button-change-list").onclick = eatFruits;

    document.getElementById("button-count").onclick = countNums;
};