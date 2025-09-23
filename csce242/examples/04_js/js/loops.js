document.getElementById("btn-display").onclick = () => {
    const displaySection = document.getElementById("loop-result");
    const ul = document.createElement("ul");
    displaySection.append(ul);

    //loop and write the numbers one through 10
    for(let i=0; i < 10; i++){
        const li = document.createElement("li");
        li.innerHTML = `${i} banana(s)`;
        ul.append(li);
    }
}