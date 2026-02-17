document.getElementById("btn-first-loop").onclick = () => {
    const ul = document.getElementById("ul-first-loop");

    for(let i = 0; i < 10; i++){
        const li = document.createElement("li");
        li.innerHTML = `I'm thie ${i+1} element`;
        ul.append(li);
    }
};

document.getElementById("btn-count-range");