document.getElementById("btn-first-loop").onclick = () => {
    const ul = document.getElementById("ul-first-loop");

    for(let i = 0; i < 10; i++){
        const li = document.createElement("li");
        li.innerHTML = `I'm thie ${i+1} element`;
        ul.append(li);
    }
};

document.getElementById("btn-count-range").onclick = () => {
    const startNumber = parseInt(document.getElementById("txt-start").value);
    const endNumber = parseInt(document.getElementById("txt-end").value);
    const errorP = document.getElementById("error-range");
    errorP.innerHTML = "";
    const divNumRange = document.getElementById("number-range");

    if(startNumber > endNumber) {
        errorP.innerHTML = "Not a valid range";
        return;
    }

    for(let i = startNumber; i < endNumber + 1; i++){
        const p = document.createElement("p");
        p.innerHTML = i;
        divNumRange.append(p);
        p.onclick = () => {
            document.getElementById("number-message").innerHTML = 
                `You clicked the ${i}th item`;
        };
    }

};

document.getElementById("a-show-toys").onclick = (e) => {
    e.preventDefault(); //don't go to the link destination
    const toyList = document.getElementById("toy-list");
    toyList.innerHTML = "";

    const toys = ["fish", "guitar", "popsicle sticks", "rc cars", "shoe"];

    //traditional for loop
    for(let i=0; i < toys.length; i++){
        const li = document.createElement("li");
        li.innerHTML = toys[i];
        toyList.append(li);
    }

    //second way preferred
    //(toy, i)
    toys.forEach((toy)=>{
        const li = document.createElement("li");
        li.innerHTML = toy;
        toyList.append(li);
    });
};

//Associative array
const toyPrices = [];
toyPrices["fist"] = 2.99;
toyPrices["guitar"] = 200.00;
toyPrices["popsicle sticks"] = 0.1;
toyPrices["rc car"] = 59.99;
toyPrices["shoe"] = 49.99;

for(let toy in toyPrices) {
    const toyTable = document.getElementById("toy-table");
    const tr = document.createElement("tr");
    toyTable.append(tr);
    
    const tdToy = document.createElement("td");
    tdToy.innerHTML = toy;
    tr.append(tdToy);
    
    const tdPrice = document.createElement("td");
    tdPrice.innerHTML = `$${toyPrices[toy]}`;
    tr.append(tdPrice);
    
    tr.onclick = () => {
        document.getElementById("p-toy-desc").innerHTML = 
            `You want a ${toy} so ask your mom for $${toyPrices[toy]}`;
    };
}