document.getElementById("btn-basic-loop").onclick=() => {
    const loopsDiv = document.getElementById("basic-loops-list");
    
    for(let i=1; i <= 5; i++ ){
        const p = document.createElement("p");
        p.innerHTML = i;
        loopsDiv.append(p);
    }
};