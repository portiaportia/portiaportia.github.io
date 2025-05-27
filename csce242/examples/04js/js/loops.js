document.getElementById("btn-basic-loop").onclick=() => {
    const loopsDiv = document.getElementById("basic-loops-list");
    
    for(let i=1; i <= 5; i++ ){
        const p = document.createElement("p");
        p.innerHTML = i;
        loopsDiv.append(p);
    }
};

//loop with input values
document.getElementById("btn-loop-input").onclick = () => {
    const startNum = parseInt(document.getElementById("txt-start-loop").value);
    const endNum = parseInt(document.getElementById("txt-end-loop").value);
    const loopList = document.getElementById("loop-list");

    for(let i=startNum; i <= endNum; i++){
        const li = document.createElement("li");
        li.innerHTML = i;
        loopList.append(li);
    }
}